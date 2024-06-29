import React from "react"
import { useAppContext } from "../context/AppContextProvider"
import { useNavigate } from "react-router-dom"
import "./AuthGuard.css"

const AuthGuard = ({ children }) => {
  const { state } = useAppContext()
  const navigate = useNavigate()
  if (!state.isUserLoggedIn) {
    return (
      <div className="auth-guard-window">
        <h2>Please Sign In or Sign Up</h2>
        <button
          onClick={() => {
            navigate("/signin")
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            navigate("/signup")
          }}
        >
          Sign Up
        </button>
      </div>
    )
  }
  return <>{children}</>
}

export default AuthGuard
