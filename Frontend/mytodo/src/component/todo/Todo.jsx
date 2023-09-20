import { useContext, useState } from "react";
import Header from "./Header";
import Main from "./Mains";
import { authConntext } from "./AuthenticationContext";
import Login from "./Login";
import Signup from "./Signup";

const cred = {
  username: "",
  password: "",
};

export default function Todo() {
  const [taskId, setTaskId] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);
  const [credential, setCredential] = useState(cred);
  const authStatus = useContext(authConntext);
  return (
    <>
      <Header
        taskId={taskId}
        auth={authStatus.auth}
        authController={authStatus.authController}
        setTaskId={setTaskId}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setSignUpForm={setSignUpForm}
        signUpForm={signUpForm}
        setCredential={setCredential}
      />
      {authStatus.auth ? (
        <Main taskId={taskId} setTaskId={setTaskId} credential={credential} />
      ) : (
        (loginForm && (
          <Login
            authController={authStatus.authController}
            credential={credential}
            setCredential={setCredential}
          />
        )) ||
        (signUpForm && (
          <Signup signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
        ))
      )}
    </>
  );
}
