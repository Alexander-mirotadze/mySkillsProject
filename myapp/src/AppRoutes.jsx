import React from "react"
import { Route, Routes } from "react-router-dom"
import appRoutes from "./config/routes"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/signUp/SignUp"
import ErrorPage from "./pages/error/ErrorPage"
import PageNotFound from "./pages/pageNotFound/PageNotFound"
import "./AppRoutes.css"

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((item) => {
        if (item?.Guard) {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                <item.Guard>
                  <item.Component />
                </item.Guard>
              }
            />
          )
        }
        return (
          <Route
            key={item.path}
            path={item.path}
            element={<item.Component />}
          />
        )
      })}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
