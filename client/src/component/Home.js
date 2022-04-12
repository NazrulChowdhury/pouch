import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import MultiSelect from "./formSupport/MultiSelect"

const Home = () => {
  const [tags, setTags] = useState('')
  const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  }).required()
  //  yup.array().of(yup.string())

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data => console.log(data)
  const colours =['red', 'yellow', 'green', 'orange', 'grey']
  console.log(tags)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("description")} />
      <p>{errors.age?.message}</p>

      <MultiSelect 
        setState = {setTags}
        options = {colours}
      />
      
      <input type="submit" />
    </form>
  )
}

export default Home