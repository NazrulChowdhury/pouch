import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "antd/dist/antd.css"
import GlobalContextProvider from "./context/globalContext"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <App />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
