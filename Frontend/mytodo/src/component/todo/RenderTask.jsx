import ArrangeTask from "./ArrangeTask";
import Styles from "./styles/main.module.css";
import handleUpdates from "./APIs/handleUpdate";
import { useState } from "react";
import Sorter from "./Sorter";
export default function RenderTask({
  data,
  getOriginalData,
  getData,
  setData,
  username,
  password,
  checkedData,
  setEmptyChecker,
  setLoader,
}) {
  const [sorter, setSorter] = useState("");

  const handleStatus = (type, id) => {
    handleUpdates(
      type,
      id,
      getData,
      setData,
      getOriginalData,
      username,
      password,
      setEmptyChecker,
      setLoader
    );
  };

  return (
    <>
      <Sorter
        sorter={sorter}
        setSorter={setSorter}
        data={data}
        setData={setData}
      />
      <div id={Styles.gridshow}>
        {data.map((task) => (
          <ArrangeTask
            checkedData={checkedData}
            key={task.taskId}
            task={task}
            handleStatus={handleStatus}
          />
        ))}
      </div>
    </>
  );
}
