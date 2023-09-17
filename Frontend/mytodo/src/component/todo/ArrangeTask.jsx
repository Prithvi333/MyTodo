import Styles from "./styles/ArrangeTask.module.css";
export default function ArrangeTask({ task }) {
  const color =
    task.taskPriority == "LOW"
      ? Styles.low
      : task.taskPriority == "MEDIUM"
      ? Styles.mid
      : Styles.high;

  return (
    <div className={color} id={Styles.card}>
      <h3 id={Styles.underlinetext}>{task.taskTitle}</h3>
      <p>{task.taskDesc}</p>
      <div>
        <i className={Styles.textseprator}>{task.taskDay}</i>
        <i className={Styles.textseprator}>{task.taskDeadline}</i>
        <i className={Styles.textseprator}>{task.taskPriority}</i>
        <hr />
        <div className={Styles.opttaker}>
          <button className="btn">Important</button>
          <button className="btn">Complete</button>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
