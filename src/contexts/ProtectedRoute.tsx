import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { AuthContext } from './AuthContext';


const ProtectedRoute = ({ component: Component, ...rest }: RouteProps) => (
    <Route {...rest} render={(props) => (
        <AuthContext.Consumer>
            {(context) => context.currentUser
                ? Component 
                    ? <Component {...props} />
                    : <React.Fragment />
                : <Redirect to={"/login"} />
            }
        </AuthContext.Consumer>
    )
    } />
);

export default ProtectedRoute;
