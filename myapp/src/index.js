import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import AppContextProvider from "./context/AppContextProvider"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>
)
