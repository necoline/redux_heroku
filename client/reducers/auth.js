const auth = (state = { isAuthenticated: false }, action ) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        id: action.id, //so we know who is logged in
        token: action.token
            //token in local storage that will keep user logged in during session (if they were to refresh)
      }
    case 'LOGOUT':
      return {} //clears everything to refresh state/store
    default:
      return state;
  }
}

export default auth;
