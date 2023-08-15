import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { logout } from '../../redux/actions';
import './Welcome.css'; // Import your CSS file

const Welcome = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const { logout: authLogout } = useAuth0();

  const handleLogout = () => {
    dispatch(logout());
    authLogout({ returnTo: window.location.origin });
  };

  return (
    <div className="welcome-container">
      <button className="logout-button" onClick={handleLogout}>Log Out</button>
      <div className="user-info">
        <h2 className="welcome-heading">Welcome, {user.name}!</h2>
        <img className="profile-picture" src={user.picture} alt="Profile" />
        <p className="welcome-email">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Welcome;
