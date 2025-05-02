import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider()
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile (auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    } 

    const googleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            return unsubscribe()
        }

    },[])

    const authInfo={
        user, 
        loading,
        createUser,
        login,
        logout,
        googleLogIn,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )




};

export default AuthProvider;