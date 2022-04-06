import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "antd/dist/antd.css"
import GlobalContextProvider from "./context/globalContext"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
        </QueryClientProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
