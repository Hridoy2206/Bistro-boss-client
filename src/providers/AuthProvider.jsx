import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    {/*-------Create User--------*/ }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    {/*-------User Login---------*/ }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    {/*-------Logout-------*/ }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    {/*----------Update User -----------*/ }
    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    {/*----------Google Login---------*/ }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    {/*-------State Handler--------*/ }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);

            //Get and set Token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data);
                        localStorage.setItem('access-token', data.data)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// import { createContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "../firebase/firebase.config";


// export const AuthContext = createContext(null)
// const auth = getAuth(app);

// const AuthProvider = ({ chlidren }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)



//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser)
//             console.log("current user", currentUser);
//             setLoading(false)
//         });
//         return () => {
//             return unSubscribe()
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {chlidren}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

