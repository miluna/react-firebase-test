import firebase from '../config/firebase';
import { auth } from "firebase";

export const register = (email: string, password: string): Promise<auth.UserCredential> => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const login = (email: string, password: string): Promise<auth.UserCredential> => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const loginWithGoogle = (): Promise<auth.UserCredential> => {
    return firebase.auth().signInWithPopup(new auth.GoogleAuthProvider());
};

export const logout = (): Promise<void> => {
    return firebase.auth().signOut();
};
