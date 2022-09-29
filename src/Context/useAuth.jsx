import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvide = ({ children }) => {
  const userDetails = {
    name: "Ramandeep",
    password: "raman@123",
  };
  const [isUserLogined, setIsUserLogined] = useState();

  const login = (loginDetails) => {
    userDetails.name === loginDetails.name &&
    userDetails.password === loginDetails.password
      ? setIsUserLogined(true)
      : setIsUserLogined(false);
  };
  return (
    <AuthContext.Provider value={{ login, isUserLogined }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvide };
