//Imports
import { createContext, useState, useContext, useEffect } from 'react';

//Setup User Context
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

//User Context Function
export const UserProvider = ({ children }) => {

  //Set state and populate from Local Storage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  //Set User Context into Local Storage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  //Log Out Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  //Html Output
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
