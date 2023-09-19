import { createContext, useState } from "react";

export const authConntext = createContext(false);

export default function AuthHolder(props) {
  const [auth, setAuth] = useState(false);

  const authController = () => {
    setAuth(!auth);
  };

  return (
    <authConntext.Provider
      value={{ auth: auth, authController: authController }}
    >
      {props.children}
    </authConntext.Provider>
  );
}
