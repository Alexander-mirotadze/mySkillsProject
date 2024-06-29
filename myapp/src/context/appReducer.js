import { parseToken } from "../utils/Jwt"
import { toggleLocalStorage } from "../utils/toggleLocalStorage"
import actionsForContext from "./actions"

export const initialState = {
  isUserLoggedIn: false,
  user: null,
  token: "",
}

export function appReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case actionsForContext.signInUser: {
      const user = parseToken(payload)
      toggleLocalStorage(payload)
      return { ...state, isUserLoggedIn: true, token: payload, user }
    }
    case actionsForContext.signOutUser: {
      toggleLocalStorage()
      return { ...state, isUserLoggedIn: false, token: "", user: null }
    }
    default:
      return state
  }
}
