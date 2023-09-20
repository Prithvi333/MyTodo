export default async function getTaskById(
  taskId,
  username,
  password,
  data,
  setData
) {
  const comingData = await fetch(
    `http://localhost:8080/todo/findtask/${taskId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    }
  );
  const origData = await comingData.json();

  if (comingData.ok == true) {
    setData([...data.filter((task) => task.taskId == origData.taskId)]);
  } else data && setData(data);
}
