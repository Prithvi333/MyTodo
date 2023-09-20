import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Choice from "./Choice";
import RenderTask from "./RenderTask";
import Styles from "./styles/main.module.css";
import { getOriginalData } from "./APIs/getOriginalData";
import getTaskById from "./APIs/getTaskById";
import createTask from "./APIs/createTask";
import EmptyBox from "./Emptybox";

export default function Main({ taskId, credential }) {
  const [data, setData] = useState([]);
  const [checkedData, setCheckedData] = useState(null);
  const [emptyChecker, setEmptyChecker] = useState(null);
  const { username, password } = credential;

  const getData = (url) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    });

  useEffect(() => {
    getOriginalData(getData, setData, setEmptyChecker);
  }, []);
  useEffect(() => {
    taskId
      ? getTaskById(taskId, username, password, data, setData)
      : getOriginalData(getData, setData);
  }, [taskId]);
  const addTask = (newTask) => {
    createTask(newTask, username, password, getData, setData);
    if (emptyChecker)
      setEmptyChecker(null) && getOriginalData(getData, setData);
  };

  return (
    <main className={Styles.mainflex}>
      <div id={Styles.leftbox}>
        <Choice
          setEmptyChecker={setEmptyChecker}
          setCheckedData={setCheckedData}
          data={data}
          setData={setData}
          getData={getData}
        />
      </div>
      <div id={Styles.rightbox}>
        <AddTask addTask={addTask} />
        {emptyChecker ? (
          <EmptyBox />
        ) : (
          data[0] && (
            <RenderTask
              checkedData={checkedData}
              username={username}
              password={password}
              data={checkedData ? checkedData : data}
              setData={setData}
              getOriginalData={getOriginalData}
              getData={getData}
            />
          )
        )}
      </div>
    </main>
  );
}
