import React, { useState, useEffect, Props } from 'react';
import firebase from '../config/firebase';

export const AuthContext = React.createContext({ currentUser: undefined })


export const AuthProvider = (props: Props<any>) => {
    const [currentUser, setUser] = useState();

    useEffect(() => {
        firebase.auth()
            .onAuthStateChanged(user => setUser(user))
    }, []);


    return (
        <AuthContext.Provider value={{ currentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
