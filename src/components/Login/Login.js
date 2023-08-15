import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("login")
  console.log("isAuthenticated", isAuthenticated, user);

  if (isAuthenticated && user) {
    dispatch(loginSuccess(user)); // Dispatch action to update user state in Redux
    navigate('/welcome'); // Redirect to the Welcome Screen
  }

  return (
    <>

      <div className="login-container">

        <button className='login-button' onClick={() => loginWithRedirect()}>Log In</button>
      </div>

    </>

  );
};

export default Login;
