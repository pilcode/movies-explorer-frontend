import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, path }) => {
  return (
    <Route path={path}>
      {localStorage.token ? <>{children}</> : <Redirect to="./signin" />}
    </Route>
  );
};

export default ProtectedRoute;
