import { getOriginalData } from "./getOriginalData";

export default async function handleUpdates(
  type,
  id,
  getData,
  setData,
  getOriginalData,
  username,
  password,
  setEmptyChecker,
  setLoader
) {
  // getOriginalData(getData, setData, setLoader, setEmptyChecker);
  await fetch(`http://localhost:8080/todo/${type}/${id}`, {
    method: type == "deletetask" ? "DELETE" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  });
  getOriginalData(getData, setData, setEmptyChecker, setLoader);
}
