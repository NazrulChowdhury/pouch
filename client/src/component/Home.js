import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import MultiSelect from "./formSupport/MultiSelect"
import { useMutation } from "react-query"
import { submitPost } from "../functions/api"
import { message } from "antd"
import { useGlobalContext } from "../context/globalContext"

const Home = () => {
  const {navs} = useGlobalContext()
  const [selectedTags, setSelectedTags] = useState([])
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
 
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const {mutateAsync} = useMutation(submitPost,{ 
    enabled : false,
    onSuccess : (data) => message.success(data),
    onError : (error) => message.error(error.response.data)
  })
  const onSubmit = data => {
    if(!selectedTags.length) {
      setTagError('please select at least one tag or add a new tag!')
    } else {
    data.tags = selectedTags 
    mutateAsync(data) 
    }
  }

  useEffect(() => selectedTags.length ? setTagError('') : null,[selectedTags])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <p style={{color : 'red'}}>{errors.title?.message}</p>
        
      <input {...register("description")} />
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

export default Home