import Styles from "./styles/header.module.css";
import logo from "../../resources/logo.png";
import { useState } from "react";
export default function Header({
  taskId,
  setTaskId,
  auth,
  loginForm,
  setLoginForm,
  signUpForm,
  setSignUpForm,
}) {
  return (
    <>
      <header className={Styles.headerflex}>
        <div>
          <img id={Styles.logo} src={logo} alt="" />
          <span id={Styles.todotextcolor}>Todo</span>
        </div>
        {auth && (
          <div>
            <input
              className={"inpborder"}
              type="text"
              name=""
              placeholder="Search by Id"
              value={taskId}
              onChange={(e) => {
                setTaskId(e.target.value);
              }}
            />
          </div>
        )}

        <div>
          <button onClick={() => setLoginForm(!loginForm)} className="btn">
            Login
          </button>
          <button onClick={() => setSignUpForm(!signUpForm)} className="btn">
            Register
          </button>
        </div>
      </header>
      {!loginForm && <div className={Styles.backgroundimg}></div>}
    </>
  );
}
