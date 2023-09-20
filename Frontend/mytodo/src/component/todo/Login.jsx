import Styles from "./styles/Login.module.css";
import userLogin from "./APIs/userLogin";

export default function Login({ authController, credential, setCredential }) {
  const triggerLogin = async (e) => {
    e.preventDefault();
    const response = await userLogin(credential);
    if (response.status == 200) authController();
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
          value={credential.username}
          className="inpborder"
          type="email"
          name="username"
          id=""
        />
        <br />
        <label htmlFor="">Enter your password</label>
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
          className="btn"
          type="submit"
          name=""
          id=""
          value="Login"
        />
      </form>
    </div>
  );
}
