import React, { createContext, useContext, useEffect, useReducer } from "react"
import { appReducer, initialState } from "./appReducer"
import { signInUserCreator } from "./actionsCreators"
import { isTokenValid } from "../utils/Jwt"

const appContext = createContext()

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token && isTokenValid(token)) {
      dispatch(signInUserCreator(token))
    }
  }, [])

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(appContext)
  if (context) {
    return context
  }
  throw new Error("app Context error")
}

export default AppContextProvider
