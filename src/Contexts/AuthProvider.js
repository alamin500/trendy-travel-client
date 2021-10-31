import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = React.useState("Daryl");
  const allContext = useFirebase();

  const value = {
    username,
    setUsername,
    allContext,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
