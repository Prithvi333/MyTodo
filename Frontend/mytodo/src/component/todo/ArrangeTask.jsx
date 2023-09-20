import Styles from "./styles/ArrangeTask.module.css";
export default function ArrangeTask({ task, handleStatus, checkedData }) {
  const color =
    task.taskPriority == "LOW"
      ? Styles.low
      : task.taskPriority == "MEDIUM"
      ? Styles.mid
      : Styles.high;

  const impbtnbackground = task.favorite ? Styles.btnbackground : null;
  const compbtnbackground = task.complete ? Styles.btnbackground : null;
  const delbtnbackground = task.deleted ? Styles.btnbackground : null;

  return (
    <div className={color} id={Styles.card}>
      <div className={Styles.flex}>
        <h4>{task.taskId}</h4>
        <h4>{task.taskTime.substring(0, 8)}</h4>
      </div>
      <h3 id={Styles.underlinetext}>{task.taskTitle}</h3>
      <p>{task.taskDesc}</p>
      <div>
        <i className={Styles.textseprator}>{task.taskDay}</i>
        <i className={Styles.textseprator}>{task.taskDeadline}</i>
        <i className={Styles.textseprator}>{task.taskPriority}</i>
        <hr />
        <div className={Styles.opttaker}>
          {!checkedData && (
            <>
              <button
                onClick={() => handleStatus("favoritetask", task.taskId)}
                className="btn"
                id={impbtnbackground}
              >
                Important
              </button>
              <button
                onClick={() => handleStatus("completetask", task.taskId)}
                className="btn"
                id={compbtnbackground}
              >
                Complete
              </button>
              <button
                onClick={() => handleStatus("deletetask", task.taskId)}
                className="btn"
                id={delbtnbackground}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
