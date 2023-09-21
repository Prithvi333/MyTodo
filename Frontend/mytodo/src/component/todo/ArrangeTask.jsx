import { useState } from "react";
import Styles from "./styles/ArrangeTask.module.css";
export default function ArrangeTask({ task, handleStatus, checkedData }) {
  const [colorChanger, setColorChanger] = useState("");

  const color =
    task.taskPriority == "LOW"
      ? Styles.low
      : task.taskPriority == "MEDIUM"
      ? Styles.mid
      : Styles.high;

  const impbtnbackground = task.favorite ? Styles.btnbackground : null;
  const compbtnbackground = task.complete ? Styles.btnbackground : null;
  const delbtnbackground = task.deleted ? Styles.btnbackground : null;
  console.log(colorChanger);
  return (
    <div
      className={`${color} ${colorChanger ? Styles[colorChanger] : ""}`}
      id={Styles.card}
    >
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
              <div id={Styles.cardbottom}>
                <div>
                  <select
                    onChange={(e) => setColorChanger(e.target.value)}
                    className="inpborder"
                    name=""
                    id=""
                  >
                    <option value="">Color</option>
                    <option value="brown">Brown</option>
                    <option value="blue">Blue</option>
                    <option value="teal">Teal</option>
                  </select>
                </div>
                <div>
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
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
