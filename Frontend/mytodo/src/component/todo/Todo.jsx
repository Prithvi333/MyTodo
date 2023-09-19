import { useContext, useState } from "react";
import Header from "./Header";
import Main from "./Mains";
import { authConntext } from "./AuthenticationContext";
import Login from "./Login";
import Signup from "./Signup";

export default function Todo() {
  const [taskId, setTaskId] = useState(null);
  const [loginForm, setLoginForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);
  const authStatus = useContext(authConntext);

  return (
    <>
      <Header
        taskId={taskId}
        auth={authStatus.auth}
        setTaskId={setTaskId}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setSignUpForm={setSignUpForm}
        signUpForm={signUpForm}
      />
      {authStatus.auth ? (
        <Main taskId={taskId} setTaskId={setTaskId} />
      ) : (
        // loginForm && <Login authController={authStatus.authController} />
        signUpForm && (
          <Signup signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
        )
      )}
    </>
  );
}
