import actionsForContext from "./actions"

//
export function signInUserCreator(payload) {
  return {
    type: actionsForContext.signInUser,
    payload,
  }
}

//
export function signOutUserCreator() {
  return {
    type: actionsForContext.signOutUser,
  }
}
