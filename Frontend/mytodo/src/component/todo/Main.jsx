import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Choice from "./Choice";
import RenderTask from "./RenderTask";
import Styles from "./styles/main.module.css";

const getData = () =>
  fetch("http://localhost:8080/todo/tasks", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("pthakur.pt36@gmail.com:124421"),
    },
  });

export default function Main() {
  const [data, setData] = useState([]);

  const getOriginalData = async () => {
    try {
      const data = await getData();
      const planeData = await data.json();
      setData(planeData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOriginalData();
  }, []);

  const addTask = (newTask) => {
    setData([...data, newTask]);
    getOriginalData();
  };

  return (
    <main className={Styles.mainflex}>
      <div id={Styles.leftbox}>
        <Choice />
      </div>
      <div id={Styles.rightbox}>
        <AddTask addTask={addTask} />
        <RenderTask data={data} />
      </div>
    </main>
  );
}
