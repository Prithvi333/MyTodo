import { useReducer, useState } from "react";
import Styles from "./styles/main.module.css";
import reducer from "./AddReducer";

const initValue = {
  taskTitle: "",
  taskDesc: "",
  taskDay: "",
  taskDeadline: "",
  taskPriority: "",
};

export default function AddTask({ AddTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [task, dispatch] = useReducer(reducer, initValue);

  const handleUpdater = (e) => {
    dispatch({
      type: "UPDATE_VALUE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const sendData = () => {
    console.log(task);
    AddTask(task);
  };

  return (
    <>
      <h3 className="textcenter">Add your task here!</h3>
      <form id={Styles.form} action="#">
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name=""
            placeholder="Enter title"
          />
          <br />
          <textarea
            placeholder="Enter descripton"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            name=""
            id={Styles.textarea}
            cols="auto"
            rows="auto"
          >
            Enter task description
          </textarea>
          <br />
        </div>
        <div>
          <select onChange={handleUpdater} name="" value={task.taskDay}>
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
          <label htmlFor="data">Choose deadline</label>
          <br />
          <input
            onChange={handleUpdater}
            type="date"
            id="date"
            value={task.taskDeadline}
          />
        </div>

        <div>
          <label htmlFor="">Choose your priority</label>
          <br />
          <label htmlFor="low">Low</label>
          <input
            onChange={handleUpdater}
            value={task.taskPriority}
            type="radio"
            name="taskPriority"
            id="low"
          />
          <label htmlFor="high">Medium</label>
          <input
            onChange={handleUpdater}
            value={task.taskPriority}
            type="radio"
            name="taskPriority"
            id="high"
          />
          <label htmlFor="medium">High</label>
          <input
            onChange={handleUpdater}
            value={task.taskPriority}
            type="radio"
            name="taskPriority"
            id="medium"
          />
          <div>
            <input
              onClick={() => sendData}
              className="btn"
              type="submit"
              name=""
              id=""
              value="Add"
            />
          </div>
        </div>
      </form>
    </>
  );
}
