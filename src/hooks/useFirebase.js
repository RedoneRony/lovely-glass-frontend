/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
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
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
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
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    fetch(`https://fierce-beach-56324.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // registration
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        // const newUser = { email, displayName: name };
        // setUser(newUser);
        // save user to the database
        saveUser(email, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
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

  const saveUser = (email, method) => {
    const user = { email };
    fetch("https://fierce-beach-56324.herokuapp.com/user/", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    error,
    // signup,
    getEmail,
    getPassword,
    getPhoto,
    getName,
    setUser,
    setError,
    registerUser,
    signInWithEmail,
    signInUsingGoogle,
    logout,
    saveUser,
    admin,
    isLoading,
  };
}
export default useFirebase;
