import React, {useContext} from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { AuthContext } from './AuthContext';


const ProtectedRoute = ({ component: Component, ...rest }: RouteProps) => {
    const auth = useContext(AuthContext);
    return auth.currentUser !== null && Component
        ? <Route {...rest} render={(props) => <Component {...props} />} />
        : <Redirect to={"/login"} />;
};

export default ProtectedRoute;
