import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import MultiSelect from "./MultiSelect"
import { useGlobalContext } from "@contexts/globalContext"
import { IPostFormProps, PostDocument, PostInput } from "@types"
import { UseMutateAsyncFunction } from "react-query/types/react/types"

const PostForm = ({submitForm, data}:IPostFormProps) => {
  const {navs} = useGlobalContext()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [tagError, setTagError] = useState('')
  
  const schema = yup.object({
    title: yup.string()
    .max(200,'maximum 200 characters allowed!')
    .required('please enter a title!'),
    description: yup.string()
    .max(5000,'maximum 5000 characters allowed!')
    .required('please enter a description!'),
  })
  .required()

  let defaultValues = {} as PostInput
  if(data) {
    defaultValues ={
      title : data.title,
      description : data.description,
      tags : data.tags 
    } 
  }
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema), defaultValues
  })

  const onSubmit = (formData:any) => {
    if(!selectedTags.length) {
      setTagError('please select at least one tag or add a new tag!')
    } else {      
      submitForm({
        ...formData, 
        tags : selectedTags,
        ...(data && {_id : data._id})
      }) 
    }
  }

  useEffect(() => {
    selectedTags.length ? setTagError('') : null
  },[selectedTags])
  
  useEffect(() => data && setSelectedTags(data.tags),[])
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("title")} 
        placeholder = 'Write a short title'
      />
      <p style={{color : 'red'}}>{errors.title?.message}</p>
        
      <textarea style={{width:'80%', height:'400px'}}{...register("description")} />
      <p style={{color : 'red'}}>{errors.description?.message}</p>

      <MultiSelect 
        selectedTags = {selectedTags}
        setSelectedTags = {setSelectedTags}
        options = {navs}
      />
      {tagError && <p style={{color : 'red'}}>{tagError}</p>}
      
      <input type="submit" />
    </form>
  )
}

export default PostForm