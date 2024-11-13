import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";




 export const AuthContext= createContext(null)
 const googleProvider = new GoogleAuthProvider()
 const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null)
 const [loading,setLoading]= useState(true)

 //  create user
 const createUser=(email,password)=>{
setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }
 //sign in  user
 const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 // sign  out
 const signOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
 }
 // goggle 
 const googleSignIn =()=>{
    return signInWithPopup(auth,googleProvider)
  }

useEffect(()=>{
    const  unSubsCribe = onAuthStateChanged(auth ,(currentUser)=>{
        console.log('current user',currentUser)
    setUser(currentUser)
    setLoading(false)
    })
    return ()=>{
        unSubsCribe()
    }

},[])


    const authInfo = {
        user,
      createUser,
      signInUser,
      signOutUser,
   loading,
   googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




