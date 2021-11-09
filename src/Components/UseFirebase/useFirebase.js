import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.initialize';
firebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    return { user, error, isLoading, googleSignIn,setIsLoading,setError,logOut,setUser }
};

export default useFirebase;