import { getOriginalData } from "./getOriginalData";

export default async function createTask(
  newTask,
  username,
  password,
  getData,
  setData,
  setEmptyChecker,
  setLoader,
  error,
  setError
) {
  const tsk = await fetch("http://localhost:8080/todo/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(newTask),
  });
  setError("Check you deadline or priority field");
  // const od = await tsk.json();
  // tsk.status === 502
  //   ? setError(od.errorMessage)
  //   : tsk.status === 400
  //   ? setError("Check you deadline or priority field")
  //   : setError("");

  getOriginalData(getData, setData, setEmptyChecker, setLoader);
}
