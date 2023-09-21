import Styles from "./styles/header.module.css";
import logo from "../../resources/logo.png";
export default function Header({
  taskId,
  setTaskId,
  auth,
  authController,
  loginForm,
  setLoginForm,
  signUpForm,
  setSignUpForm,
  setCredential,
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
          {auth ? (
            <button
              onClick={() => {
                setCredential({ username: "", password: "" });
                authController();
              }}
              className="btn"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setSignUpForm(false);
                  setLoginForm(!loginForm);
                }}
                className={`btn ${loginForm ? Styles.activebtn : ""}`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setLoginForm(false);
                  setSignUpForm(!signUpForm);
                }}
                className={`btn ${signUpForm ? Styles.activebtn : ""}`}
              >
                Register
              </button>
            </>
          )}
        </div>
      </header>
      {!loginForm && !signUpForm && (
        <div className={Styles.backgroundimg}></div>
      )}
    </>
  );
}
