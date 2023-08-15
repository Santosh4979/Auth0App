export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  

  export const logout = () => ({
    type: 'LOGOUT',
  });