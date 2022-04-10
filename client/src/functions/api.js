import axios from "axios"
import { useEffect } from "react"
import { useGlobalContext } from "../context/globalContext"

export const getSession = async() => {
    const response = await axios('/api/getSession',{withCredentials : true})
    return response.data
}
