var userDefaults = {
  username: '',
  password: ''
};

export function authFormInputReducer(state = userDefaults, action) {
  switch(action.type) {
    case "SET_AUTH_INPUT_USERNAME":
      return {
        ...state,
        username: action.username
      };
    case "SET_AUTH_INPUT_PASSWORD":
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
}

export function userSigninReducer(state = {}, action) {
  switch(action.type) {
    case "LOGIN_SUCCESSFUL":
      return {
        ...state,
        user: action.user
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: action.err
      };
    default:
      return state;
  }
}
