import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Content from "./component/Layout/Content"
import FullPageSpinner from "./component/Layout/FullPageSpinner"
import PageLayout from "./component/Layout/PageLayout"
import { useGlobalContext } from "./context/globalContext"
import { getSession } from "./functions/api.js"

function App() {
  const {user, setUser} = useGlobalContext()
  const [initialRender, setInitialRender] = useState(true)
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST_URL

  const {isLoading , refetch: fetchSession } = useQuery('getSession', () => getSession(user, setUser),{
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
      {(initialRender || isLoading) && 
        <FullPageSpinner />
      }
    </>
  )
}

export default App;
