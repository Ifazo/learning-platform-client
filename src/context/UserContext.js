import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebaseConfig';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    //1. create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //2. update user
    const updateUser = (name, text) => {
            setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: text,
        })
    }

    const signIn = (email, password) => {
            setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
            setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
            setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
            setLoading(true)
        return signOut(auth);
    }

    const authInfo = { user, loading, updateUser, createUser, signIn, logOut, signInWithGoogle, signInWithGithub };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;