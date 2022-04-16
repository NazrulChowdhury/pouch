import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const CustomTag = () => {
    const schema = yup.object({
        title: yup.string()
        .max(200,'maximum 200 characters allowed!')
        .required('please enter a title!'),
      }).required()

  return (
    <div>CustomTag</div>
  )
}

export default CustomTag