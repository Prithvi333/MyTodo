import { useContext, useState } from "react";
import Header from "./Header";
import Main from "./Mains";
import { authConntext } from "./AuthenticationContext";
import Login from "./Login";
import Signup from "./Signup";
import NewError from "./NewError";

const cred = {
  username: "",
  password: "",
};

export default function Todo() {
  const [taskId, setTaskId] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);
  const [credential, setCredential] = useState(cred);
  const [error, setError] = useState("");
  const authStatus = useContext(authConntext);
  console.log(error);
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
      {error && <NewError error={error} setError={setError} />}
      {authStatus.auth ? (
        <Main
          error={error}
          setError={setError}
          taskId={taskId}
          setTaskId={setTaskId}
          credential={credential}
        />
      ) : (
        (loginForm && (
          <Login
            setError={setError}
            authController={authStatus.authController}
            credential={credential}
            setCredential={setCredential}
          />
        )) ||
        (signUpForm && (
          <Signup
            setError={setError}
            signUpForm={signUpForm}
            setSignUpForm={setSignUpForm}
          />
        ))
      )}
    </>
  );
}
