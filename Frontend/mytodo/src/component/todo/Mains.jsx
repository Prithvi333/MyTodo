import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Choice from "./Choice";
import RenderTask from "./RenderTask";
import Styles from "./styles/main.module.css";
import { getOriginalData } from "./APIs/getOriginalData";

const username = "pthakur.pt36@gmail.com";
const password = "124421";

const getData = (url) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  });

export default function Main({ taskId }) {
  const [data, setData] = useState([]);
  async function getTaskById(taskId) {
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

  const createTask = (newTask) => {
    fetch("http://localhost:8080/todo/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
      body: JSON.stringify(newTask),
    });
  };

  useEffect(() => {
    getOriginalData(getData, setData);
  }, []);
  useEffect(() => {
    taskId ? getTaskById(taskId) : getOriginalData(getData, setData);
  }, [taskId]);
  const addTask = (newTask) => {
    createTask(newTask);
    getOriginalData();
  };

  return (
    <main className={Styles.mainflex}>
      <div id={Styles.leftbox}>
        <Choice data={data} setData={setData} getData={getData} />
      </div>
      <div id={Styles.rightbox}>
        <AddTask addTask={addTask} />

        <RenderTask
          data={data}
          setData={setData}
          getOriginalData={getOriginalData}
          getData={getData}
        />
      </div>
    </main>
  );
}
