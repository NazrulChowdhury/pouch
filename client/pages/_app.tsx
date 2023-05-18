import GlobalContextProvider, { useGlobalContext } from '@contexts/globalContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import PageLayout from '@components/Layout/PageLayout'

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient())

  //axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST_URL

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalContextProvider>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </GlobalContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
