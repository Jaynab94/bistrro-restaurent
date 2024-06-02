import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";
import propTypes from "prop-types";
import useAxiosCommon from "../hooks/useAxiosCommon";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosCommon = useAxiosCommon();






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

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
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
            // console.log('CurrentUser-->', currentUser)
            if (currentUser) {
                const userInfo = {
                    email: currentUser.email,
                }
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }
                    })

            } else {
                localStorage.removeItem('access-token');
                setLoading(false)

            }

        })
        return () => {
            return unsubscribe()
        }
    }, [axiosCommon])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        updateUserProfile,
        logoutUser,
        logInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: propTypes.node.isRequired,
};

export default AuthProvider;