import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import jwt_decode from "jwt-decode";
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const { signedInUser, setSignedInUser } = useContext(UserContext);  
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      // get current time
      const currentTime = new Date().getTime() / 1000;
      // compare the expiration time with the current time
      // will return false if expired and will return true if not expired
      return decodedToken.exp > currentTime;
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (signedInUser || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;