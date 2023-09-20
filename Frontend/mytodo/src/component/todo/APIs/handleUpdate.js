import { getOriginalData } from "./getOriginalData";

export default async function handleUpdates(
  type,
  id,
  getData,
  setData,
  getOriginalData,
  username,
  password
) {
  console.log("working..");
  getOriginalData(getData, setData);
  await fetch(`http://localhost:8080/todo/${type}/${id}`, {
    method: type == "deletetask" ? "DELETE" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  });
  getOriginalData(getData, setData);
}
