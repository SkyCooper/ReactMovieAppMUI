import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([])
  const [Loggedin, setLoggedin] = useState(true)
  const values = {
    movies,
    setMovies,
    searchText,
    setSearchText,
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
