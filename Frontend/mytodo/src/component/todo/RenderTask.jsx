import { useState } from "react";
import ArrangeTask from "./ArrangeTask";
import Styles from "./styles/main.module.css";
export default function RenderTask({
  data,
  getOriginalData,
  getData,
  setData,
}) {
  const [sorter, setSorter] = useState(null);
  console.log(sorter);
  sorter == "asc"
    ? setData([...data.sort((a, b) => a.taskId - b.taskId)])
    : sorter == "desc"
    ? setData([...data.sort((a, b) => b.taskId - a.taskId)])
    : setData(data);

  const handleStatus = (type, id) => {
    handleUpdates(type, id);
  };

  const handleUpdates = async (type, id) => {
    getOriginalData(getData, setData);
    await fetch(`http://localhost:8080/todo/${type}/${id}`, {
      method: type == "deletetask" ? "DELETE" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("pthakur.pt36@gmail.com:124421"),
      },
    });
    getOriginalData(getData, setData);
  };

  return (
    <div id={Styles.gridshow}>
      <select
        value={sorter}
        onChange={(e) => setSorter(e.target.value)}
        className="inpborder"
        id={Styles.idsorter}
      >
        <option value="">Sort</option>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
      {data &&
        data.map((task) => (
          <ArrangeTask
            key={task.taskId}
            task={task}
            handleStatus={handleStatus}
          />
        ))}
    </div>
  );
}
