import Styles from "./styles/Login.module.css";
import userLogin from "./APIs/userLogin";
import { useEffect } from "react";

export default function Login({
  authController,
  credential,
  setCredential,
  setError,
}) {
  const triggerLogin = async (e) => {
    e.preventDefault();
    const response = await userLogin(credential);
    if (response && response.status === 200) {
      authController();
      setError("");
    } else {
      setError("Incorrect email or password");
    }
  };
  return (
    <div className={Styles.backgroundimg}>
      <img src="" alt="" />
      <form id={Styles.formalignment} action="#">
        <label className="inplabel" htmlFor="">
          Enter your email
        </label>
        <br />
        <input
          onChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
          value={credential.username}
          className="inpborder"
          type="email"
          name="username"
          id="emfield"
        />
        <br />
        <label className="inplabel" htmlFor="">
          Enter your password
        </label>
        <br />
        <input
          onChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
          value={credential.password}
          className="inpborder"
          type="password"
          name="password"
          id=""
        />
        <br />
        <input
          onClick={triggerLogin}
          id={Styles.activebtn}
          className="btn"
          type="submit"
          name=""
          value="Login"
        />
      </form>
    </div>
  );
}
