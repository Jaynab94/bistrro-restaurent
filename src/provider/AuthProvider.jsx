import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);






    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // logout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    //login with google

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }




    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        logoutUser,
        logInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;