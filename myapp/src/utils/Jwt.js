import { jwtDecode } from "jwt-decode"

export const parseToken = (token) => {
  return jwtDecode(token)
}

export const isTokenValid = (token) => {
  const data = parseToken(token)
  const currentDate = Date.now() / 1000

  return data.exp > currentDate
}
