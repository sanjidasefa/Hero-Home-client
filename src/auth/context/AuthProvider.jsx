import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loader, setloader] = useState(true);
  const [user, SetUser] = useState(null);

  const google = () => {
    return signInWithPopup(auth, provider);
  };

  const resister = (email, pass) => {
    setloader(false);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  const signOutProfile = () => {
    setloader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const userData = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      setloader(false);
    });
    return () => {
      userData();
    };
  }, []);
  const firebaseAuth = {
    google,
    resister,
    login,
    signOutProfile,
    loader,
    user,
  };
  return <AuthContext value={firebaseAuth}>{children}</AuthContext>;
};

export default AuthProvider;
