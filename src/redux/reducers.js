// src/redux/reducers.js
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      // ... Other cases
        case 'LOGOUT':
            return {
              ...state,
              isAuthenticated: false,
              user: null,
            };
          default:
            return state;  
    }
  };
  
  export default authReducer;
  