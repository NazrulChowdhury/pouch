import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Content from "./component/Layout/Content"
import FullPageSpinner from "./component/Layout/FullPageSpinner"
import PageLayout from "./component/Layout/PageLayout"
import { useGlobalContext } from "./context/globalContext"
import { getSession } from "./functions/api.js"
import { message } from 'antd'

function App() {
  const {setUser} = useGlobalContext()
  const [initialRender, setInitialRender] = useState(true)
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST_URL

  const {isLoading , refetch: fetchSession, } = useQuery(
    'getSession', () => getSession(),{
      onSuccess : data => setUser(data),
      onError : error => message.error(error.response.data), 
      enabled : false
  })

  useEffect(() => {
    fetchSession()
    setInitialRender(false)
  },[])

  return (
    <>
      { !initialRender && !isLoading &&
        <PageLayout>
          <Content />
        </PageLayout>
      }
      { isLoading && <FullPageSpinner/> }
    </>
  )
}

export default App;
