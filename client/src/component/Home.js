import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import MultiSelect from "./formSupport/MultiSelect"

const Home = () => {
  const [selectedTags, setSelectedTags] = useState('')
  const schema = yup.object({
    title: yup.string()
    .max(200,'maximum 200 characters allowed!')
    .required('please enter a title!'),
    description: yup.string()
    .max(5000,'maximum 5000 characters allowed!')
    .required('please enter a description!'),
    postTags : yup.array()
    .of(yup.string())
    .required('please select or add a custom tag!')
  }).required()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data => console.log(data)
  const colours =['red', 'yellow', 'green', 'orange', 'grey']

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <p style={{color : 'red'}}>{errors.title?.message}</p>
        
      <input {...register("description")} />
      <p style={{color : 'red'}}>{errors.description?.message}</p>

      <MultiSelect 
        setState = {setSelectedTags}
        options = {colours}
        reactHookFormRegister = {register}
      />
      <p style={{color : 'red'}}>{errors.postTags?.message}</p>
      
      <input type="submit" />
    </form>
  )
}

export default Home