import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Content from "./component/Layout/Content";
import PageLayout from "./component/Layout/PageLayout"
import { useGlobalContext } from "./context/globalContext"
import { getSession } from "./functions/api.js";

function App() {
  const {user, setUser} = useGlobalContext()
  const navigate = useNavigate()
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST_URL

  useEffect(() => !user? navigate('/signIn') :navigate('/'),[user])
  useEffect(() => getSession(user, setUser),[])

  return (
    <PageLayout>
      <Content />
    </PageLayout>
  )
}

export default App;
