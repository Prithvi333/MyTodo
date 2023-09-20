import { getOriginalData } from "./getOriginalData";

export default async function createTask(
  newTask,
  username,
  password,
  getData,
  setData
) {
  await fetch("http://localhost:8080/todo/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(newTask),
  });

  getOriginalData(getData, setData);
}
