import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../components/utils/firebase/firebase.utils";

export const UserContext = createContext({
  currenUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currenUser, setCurrentUser] = useState(null);
  const value = { currenUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
