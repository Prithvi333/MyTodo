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
  setEmptyChecker,
  setLoader,
}) {
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
  );
}
