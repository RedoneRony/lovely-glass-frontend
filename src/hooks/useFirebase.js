/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
initializeAuthentication();
function useFirebase() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // sign in using google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // sign in using mail
  const signInWithEmail = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return () => unsubscribe;
  }, []);
  // registration
  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNameAndImage();
        alert("User has been created");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  //  get photo
  const getPhoto = (e) => {
    setPhoto(e?.target?.value);
  };
  return {
    user,
    error,
    signup,
    getEmail,
    getPassword,
    getPhoto,
    getName,
    setUser,
    setError,
    signInWithEmail,
    signInUsingGoogle,
    logout,
  };
}
export default useFirebase;
