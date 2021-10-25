import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
// auth provider
export const AuthContext = createContext();
function AuthProvider({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}> {children}</AuthContext.Provider>
  );
}

export default AuthProvider;
