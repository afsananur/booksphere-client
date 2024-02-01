import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword, onAuthStateChanged,  signOut} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";



export const AuthContext = createContext(null);

const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


   
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
       
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    },[])

    const userInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;