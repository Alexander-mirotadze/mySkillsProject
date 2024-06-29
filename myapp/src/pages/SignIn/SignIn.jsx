import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import routes from "../../constants/routes"
import { authUser } from "../../api/auth"
import { useAppContext } from "../../context/AppContextProvider"
import { signInUserCreator } from "../../context/actionsCreators"
import "./SignIn.css"

const SignIn = () => {
  const { dispatch } = useAppContext()
  const { state } = useLocation()
  const [user, setUser] = useState({
    userName: "",
    password: "",
  })
  const [authError, setAuthError] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    authUser(user, "login")
      .then((data) => {
        console.log(data)
        dispatch(signInUserCreator(data.token))
        navigate(routes.Popular)
      })
      .catch((err) => {
        console.log(err)
        setAuthError(err.message)
      })
  }

  return (
    <div className="sign-in-page">
      <h1>Sign In Page</h1>
      {state?.success && (
        <h3 className="congrats-after-reg-p">
          Congratulations successfully registered !
        </h3>
      )}
      <form className="sign-in-form" onSubmit={submitHandler}>
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

export default SignIn
