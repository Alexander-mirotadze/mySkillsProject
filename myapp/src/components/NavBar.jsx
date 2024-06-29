import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import routes from "../constants/routes"
import { useAppContext } from "../context/AppContextProvider"
import { signOutUserCreator } from "../context/actionsCreators"
import "./NavBar.css"

const NavBar = () => {
  const navigate = useNavigate()
  const [openSignMenu, setSetOpenSignMenu] = useState(true)
  const navRoutes = Object.entries(routes)
  const { state, dispatch } = useAppContext()
  return (
    <div className="header">
      <div
        className="logo-div"
        onClick={() => {
          navigate(routes.Home)
        }}
      ></div>
      <div className="nav-bar">
        {navRoutes.map((route) => {
          const [key, value] = route
          return (
            <NavLink key={key} to={value}>
              {key.split(/(?=[A-Z])/).join(" ")}
            </NavLink>
          )
        })}
        <button
          className="sign-in-up-out-buttons-menu"
          onClick={() => {
            setSetOpenSignMenu(!openSignMenu)
          }}
        >
          {state.token ? `Hello ${state.user.userName}` : `Hello Guest`}
        </button>
        <div
          className={
            openSignMenu
              ? "sign-in-up-out-page close"
              : "sign-in-up-out-page open"
          }
        >
          {!state.token ? (
            <>
              {" "}
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
                Sign up
              </button>{" "}
            </>
          ) : (
            <>
              <button onClick={() => {}}>Edit Profile</button>
              <button
                onClick={() => {
                  dispatch(signOutUserCreator())
                }}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
      <div className="burger-bar"></div>
    </div>
  )
}

export default NavBar
