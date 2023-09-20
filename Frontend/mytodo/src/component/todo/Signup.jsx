import { useState } from "react";
import Styles from "./styles/Login.module.css";
import userSignUp from "./APIs/userSignup";

const cred = {
  userName: "",
  userEmail: "",
  userPassword: "",
};

export default function Signup({ setError }) {
  const [credential, setCredential] = useState(cred);
  const triggerSignup = (e) => {
    e.preventDefault();
    userSignUp(credential, setError);
    setCredential(cred);
  };

  return (
    <div className={Styles.backgroundimg}>
      <img src="" alt="" />

      <form id={Styles.formalignment} action="#">
        <label htmlFor="">Enter your username</label>
        <br />
        <input
          onChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
          value={credential.userName}
          className="inpborder"
          type="text"
          name="userName"
          id=""
        />
        <br />
        <label htmlFor="">Enter email address</label>
        <br />
        <input
          onChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
          value={credential.userEmail}
          className="inpborder"
          type="text"
          name="userEmail"
          id=""
        />
        <br />
        <label htmlFor="">Enter your password</label>
        <br />
        <input
          onChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
          value={credential.userPassword}
          className="inpborder"
          type="text"
          name="userPassword"
          id=""
        />
        <br />
        <input
          onClick={triggerSignup}
          className="btn"
          type="submit"
          name=""
          id=""
          value="signup"
        />
      </form>
    </div>
  );
}
