import React, { useContext, useState } from "react";
import { auth } from "firebase/auth";

const AuthContext = React.createContext(); 

export function useAuth() {
    return useContext(AuthContext); 
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(); 

    const signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password); 
    }
    
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    const value = {
        currentUser
    }
    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
