import React, { useMemo } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import { CircleLoader } from "react-spinners"
import "./Home.css"

const Home = () => {
  const navigate = useNavigate()
  const url =
    "https://alexander-mirotadze.github.io/top100moviesserver/top100movieserver.json"

  const fetchOptions = useMemo(() => ({ method: "GET" }), [])

  const [data, errorData, isLoading] = useFetch(url, fetchOptions)

  if (errorData) {
    navigate("/error")
  }

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {isLoading ? <CircleLoader color="red" /> : console.log(data)}
    </div>
  )
}

export default Home
