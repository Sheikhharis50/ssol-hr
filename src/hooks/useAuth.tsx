import React from "react";
import { Auth } from "../api";
import { setSecretKey, delKeySecret, getKeySecret } from "../utils/secrets";

type AuthContextType = {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};

let AuthContext = React.createContext<AuthContextType>(null!);
const USER_KEY = "user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = React.useState<any>(getKeySecret(USER_KEY));

  let signin = (newUser: string, callback: VoidFunction) => {
    return Auth.signin(() => {
      setUser(newUser);
      setSecretKey(USER_KEY, newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return Auth.signout(() => {
      delKeySecret(USER_KEY);
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
