import React from 'react';
import Google from '../media/auth_service_google.svg';
import {loginWithGoogle} from "../services/auth";

const LoginWithGoogle = () => (
    <div onClick={loginWithGoogle} style={{ cursor: "pointer" }}>
        <img src={Google} alt="google-login"/> <span>Login with Google</span>
    </div>
);

export default LoginWithGoogle;
