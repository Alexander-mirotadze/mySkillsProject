import React, { useState } from "react"
import { authUser } from "../../api/auth"
import "./SignUp.css"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  })
  const [authError, setAuthError] = useState("")
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    authUser(user, "register")
      .then((data) => {
        console.log(data)
        navigate("/signin", { state: { success: true } })
      })
      .catch((err) => {
        console.log(err)
        setAuthError(err.message)
      })
  }

  return (
    <div className="sign-up-page">
      <h1>SignUp Page</h1>
      <form className="sign-up-form" onSubmit={submitHandler}>
        <label htmlFor="userName">Enter User Name :</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="User Name ..."
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }}
        />

        <label htmlFor="email">Enter your Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email ..."
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }}
        />

        <label htmlFor="password">Enter your password :</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password ..."
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }}
        />

        <button type="submit">Submit</button>
        {authError && <p className="auth-error-message">{authError}</p>}
      </form>
    </div>
  )
}

export default SignUp
