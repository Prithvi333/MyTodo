import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "./todos/actions";
const taskDetails = {
  taskTitle: "",
  taskDay: "",
  taskDesc: "",
  taskPriority: "",
  taskDeadline: "",
  isFavorite: false,
};

export default function AddTask() {
  const [task, setTask] = useState(taskDetails);
  const token = useSelector((store) => store.registerReducer.token);
  const dispatch = useDispatch();
  const handleTaskData = (e) => {
    let value;
    if (e.target.name === "isFavorite") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    setTask({
      ...task,
      [e.target.name]: value,
    });
  };

  const handleDataSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo(token, task));
  };

  return (
    <div className=" flex w-1/6 bg-slate-50  ">
      <form className="p-8 rounded-lg   w-full max-w-md   ">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Task</h2>

        <div className="mb-4">
          <label
            htmlFor="taskTitle"
            className="block text-gray-700 font-medium mb-2"
          >
            Task Title
          </label>
          <input
            required
            type="text"
            id="taskTitle"
            name="taskTitle"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
            onChange={handleTaskData}
            value={task.taskTitle}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="taskDesc"
            className="block text-gray-700 font-medium mb-2"
          >
            Task Description
          </label>
          <textarea
            required
            style={{ height: "171px" }}
            id="taskDesc"
            name="taskDesc"
            className="  resize-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
            onChange={handleTaskData}
            value={task.taskDesc}
            checked={task.isFavorite}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="taskDay"
            className="block text-gray-700 font-medium mb-2"
          >
            Task Day
          </label>
          <select
            id="taskDay"
            name="taskDay"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleTaskData}
            value={task.taskDay}
          >
            <option value="" disabled>
              Select a day
            </option>
            <option value="MONDAY">Monday</option>
            <option value="TUESDAY">Tuesday</option>
            <option value="WEDNESDAY">Wednesday</option>
            <option value="THURSDAY">Thursday</option>
            <option value="FRIDAY">Friday</option>
            <option value="SATURDAY">Saturday</option>
            <option value="SUNDAY">Sunday</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="taskDeadline"
            className="block text-gray-700 font-medium mb-2"
          >
            Task Deadline
          </label>
          <input
            required
            type="date"
            id="taskDeadline"
            name="taskDeadline"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleTaskData}
            value={task.taskDeadline}
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isFavorite"
              name="isFavorite"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              onChange={handleTaskData}
              value={task.isFavorite}
            />
            <label htmlFor="isFavorite" className="ml-2 text-gray-700">
              Favorite
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="taskPriority"
            className="block text-gray-700 font-medium mb-2"
          >
            Task Priority
          </label>
          <select
            id="taskPriority"
            name="taskPriority"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleTaskData}
            value={task.taskPriority}
          >
            <option value="" disabled>
              Select priority
            </option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={handleDataSubmit}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
