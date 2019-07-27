import React, {useState, useEffect, ReactNode} from 'react';
import firebase from '../config/firebase';
import {User} from "firebase";
import LoadingPage from "../pages/LoadingPage";

interface AuthContextState {
    currentUser: User | null,
    checked: boolean,
}

export const AuthContext = React.createContext<AuthContextState>({ currentUser: null, checked: false });


interface AuthContextProviderProps {
    children: ReactNode,
}

export const AuthProvider = ({ children } : AuthContextProviderProps) => {
    const [currentUser, setUser] = useState<User | null>(firebase.auth().currentUser);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        firebase.auth()
            .onAuthStateChanged((user: User | null) => {
                setUser(user);
                setChecked(true);
            })
    }, []);

    if (!checked) return <LoadingPage/>;
    return (
        <AuthContext.Provider value={{ currentUser, checked }}>
            {children}
        </AuthContext.Provider>
    )
};
