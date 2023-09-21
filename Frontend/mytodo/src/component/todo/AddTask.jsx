import { useReducer, useState } from "react";
import Styles from "./styles/main.module.css";
import reducer from "./addReducer";

const initValue = {
  taskTitle: "",
  taskDesc: "",
  taskDay: "",
  taskDeadline: "",
  taskPriority: "",
};

export default function AddTask({ addTask }) {
  const [task, dispatch] = useReducer(reducer, initValue);

  const handleUpdater = (e) => {
    dispatch({
      type: "UPDATE_VALUE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const sendData = () => {
    addTask(task);
    dispatch({ type: "RESET_VALUE", payload: initValue });
  };

  return (
    <div id={Styles.formalignment}>
      <h3 className={Styles.marginleft}>Add your task here!</h3>
      <form id={Styles.form} action="#">
        <div>
          <input
            className={"inpborder"}
            onChange={handleUpdater}
            value={task.taskTitle}
            type="text"
            name="taskTitle"
            placeholder="Enter title"
          />
          <br />
          <textarea
            className={"inpborder"}
            placeholder="Enter descripton"
            onChange={handleUpdater}
            value={task.taskDesc}
            name="taskDesc"
            id={Styles.textarea}
            cols="auto"
            rows="auto"
          >
            Enter task description
          </textarea>
          <br />
        </div>
        <div>
          <select
            className={"inpborder"}
            onChange={handleUpdater}
            name="taskDay"
            value={task.taskDay}
          >
            <option value="">Day</option>
            <option value="MONDAY">Monday</option>
            <option value="TUESDAY">Tuesday</option>
            <option value="WEDNESDAY">Wednesday</option>
            <option value="THURSDAY">Thursday</option>
            <option value="FRIDAY">Friday</option>
            <option value="SATURDAY">Saturday</option>
            <option value="SUNDAY">Sunday</option>
          </select>
          <br />
          <label className="inplabel" htmlFor="data">
            Choose deadline
          </label>
          <br />
          <input
            className={"inpborder"}
            onChange={handleUpdater}
            type="date"
            id="date"
            name="taskDeadline"
            value={task.taskDeadline}
          />
        </div>

        <div>
          <label className="inplabel" htmlFor="">
            Choose your priority
          </label>
          <br />
          <label className="inplabel" htmlFor="low">
            Low
          </label>
          <input
            onChange={handleUpdater}
            value="LOW"
            type="radio"
            name="taskPriority"
            id="low"
          />
          <label className="inplabel" htmlFor="high">
            Medium
          </label>
          <input
            onChange={handleUpdater}
            value="MEDIUM"
            type="radio"
            name="taskPriority"
            id="high"
          />
          <label className="inplabel" htmlFor="medium">
            High
          </label>
          <input
            onChange={handleUpdater}
            value="HIGH"
            type="radio"
            name="taskPriority"
            id="medium"
          />
          <div>
            <input
              onClick={(e) => {
                e.preventDefault();
                sendData();
              }}
              className="btn"
              type="submit"
              name=""
              id=""
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
