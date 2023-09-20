import { useState } from "react";
import ArrangeTask from "./ArrangeTask";
import Styles from "./styles/main.module.css";
import handleUpdates from "./APIs/handleUpdate";
export default function RenderTask({
  data,
  getOriginalData,
  getData,
  setData,
  username,
  password,
  checkedData,
}) {
  const [sorter, setSorter] = useState("");

  const handleStatus = (type, id) => {
    console.log("running");
    handleUpdates(
      type,
      id,
      getData,
      setData,
      getOriginalData,
      username,
      password
    );
  };

  return (
    <div id={Styles.gridshow}>
      {/* <select
        value={sorter}
        onChange={(e) => setSorter(e.target.value)}
        className="inpborder"
        id={Styles.idsorter}
      >
        <option value="">Sort</option>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select> */}
      {data.map((task) => (
        <ArrangeTask
          checkedData={checkedData}
          key={task.taskId}
          task={task}
          handleStatus={handleStatus}
        />
      ))}
    </div>
  );
}
