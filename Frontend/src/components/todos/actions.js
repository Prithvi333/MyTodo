import {
  ADDTASK,
  DELETETASK,
  FETCHTODO,
  TODOERROR,
  TODOLODDING,
} from "./actionType";
import axios from "axios";

const aboluteURL = "http://localhost:8080/todo";

const headerFormer = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const loadTodos = (token) => (dispatch) => {
  dispatch({ type: TODOLODDING });

  return axios
    .get(`${aboluteURL}/tasks`, headerFormer(token))
    .then((res) => {
      dispatch({ type: FETCHTODO, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: TODOERROR });
    });
};

const createTodo = (token, todo) => (dispatch) => {
  dispatch({ type: TODOLODDING });

  axios
    .post(`${aboluteURL}/task`, todo, headerFormer(token))
    .then((res) => {
      dispatch({ type: ADDTASK, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: TODOERROR });
    });
};

const deleteTodo = (token, taskId) => (dispatch) => {
  dispatch({ type: TODOLODDING });

  axios
    .delete(`${aboluteURL}/deletetask/${taskId}`, headerFormer(token))
    .then((res) => {
      dispatch({ type: DELETETASK, payload: res.data.taskId });
    })
    .catch(() => dispatch({ type: TODOERROR }));
};

// const completeTask = (token, taskId) => (dispatch) => {

//   dispatch({ type: TODOLODDING });

//   fetch("http://localhost:8080/todo/completetask/" + taskId, {
//     method: "PUT",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log("Then running...");
//       dispatch({ type: COMPLETETASK, payload: res.taskId });
//     })
//     .catch(() => {
//       console.log("Catch running");
//       dispatch({ type: TODOERROR });
//     });
// };

export { loadTodos, createTodo, deleteTodo };
