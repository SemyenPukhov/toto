const initialState = {isLogin: false, loginError: {mailError: false, passwordError: false}, userObj: {}};

 export const userReducer = (state  = initialState, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state, isLogin: action.payload.isLogin, loginError: action.payload.loginError, userObj: action.payload.userObj
      };
    }
    case "LOG_OUT": {
      return {
        ...state, ...initialState
      };
    }
  }
  return state;
}

