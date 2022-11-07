import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Loggedin, setLoggedin] = useState(true)
  const values = {
    Loggedin,
    setLoggedin,
  };
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = ()=>{
  return useContext(AuthContext);
}
