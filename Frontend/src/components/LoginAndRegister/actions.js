import axios from "axios";
import {
  LOADING,
  ERROR,
  REGISTRATIONSUCCESS,
  LOGINSUCCESS,
  LOGOUT,
} from "./actionType";

const headerFormer = () => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const registerUser = (cred, navigate) => (dispatch) => {
  dispatch({ type: LOADING });

  return axios
    .post("http://localhost:8080/todo/user", cred, headerFormer())
    .then((res) => {
      dispatch({
        type: REGISTRATIONSUCCESS,
        payload: cred,
      });
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      navigate("/");
    });
};

const loginUser = (userCred, navigate) => (dispatch) => {
  dispatch({ type: LOADING });
  const { userEmail: username, userPassword: password } = userCred;
  fetch("http://localhost:8080/todo/signin", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  })
    .then((res) => {
      if (res.status === 401) {
        dispatch({ type: ERROR });
        navigate("/");
      } else {
        dispatch({
          type: LOGINSUCCESS,
          payload: res.headers.get("Authorization"),
        });
        localStorage.setItem("email", username);
        navigate("/todo");
      }
    })
    .catch(() => {
      dispatch({ type: ERROR });
    });
};

const logout = (token) => (dispatch) => {
  return axios
    .get("http://localhost:8080/todo/signout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      dispatch({ type: LOGOUT });
    });
};

export { registerUser, loginUser, logout };
