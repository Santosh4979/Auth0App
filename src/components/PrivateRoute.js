import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.user);

  return (
    <>
    <Routes>
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
    </Routes>
    </>
  );
};

export default PrivateRoute;
