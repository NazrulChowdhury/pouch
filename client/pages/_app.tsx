import GlobalContextProvider from '@contexts/globalContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import PageLayout from '@components/Layout/PageLayout'
import { SERVER_HOST_URL } from 'environment'
import axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {

 axios.defaults.baseURL = SERVER_HOST_URL

  return (
    <QueryClientProvider client={ new QueryClient()}>
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

