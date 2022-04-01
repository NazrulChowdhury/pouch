import axios from "axios"
import { useEffect } from "react"
import { useGlobalContext } from "../context/globalContext"

export const getSession = (user, setUser) => {
    axios.get('/api/getSession',{withCredentials : true}) 
    .then(response => setUser(response.data))
    .catch(error => console.log(error))
}
