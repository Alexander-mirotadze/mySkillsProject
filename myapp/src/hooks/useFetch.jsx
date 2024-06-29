import { useEffect, useState } from "react"

const useFetch = (url, options) => {
  const [data, setData] = useState([])
  const [errorData, setErrorData] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url, options)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
        throw new Error(`fetch ${url} error`)
      })
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        setErrorData(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url, options])

  return [data, errorData, isLoading]
}

export default useFetch
