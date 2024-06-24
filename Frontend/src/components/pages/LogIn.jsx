import React, { useState } from "react";
import { loginUser } from "../LoginAndRegister/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const userCred = { userName: "", userPassword: "" };
export default function LogIn() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(userCred);
  const navigate = useNavigate();
  const handleFieldChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const loginUserHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData, navigate));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Unlock Your Productivity Potential with TaskMaster
          </h1>
          <p className="leading-relaxed mt-4">
            Sign in to TaskMaster to start organizing your tasks effortlessly.
            Stay on top of your to-dos, set priorities, and achieve your goals
            with our intuitive task management tools.
          </p>
        </div>
        <form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="userEmail"
              className="leading-7 text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="userEmail"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              autoComplete="false"
              onChange={handleFieldChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="userPassword"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="userPassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              autoComplete="false"
              onChange={handleFieldChange}
            />
          </div>
          <button
            type="submit"
            onClick={loginUserHandler}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Login to see your tasks details
          </p>
        </form>
      </div>
    </section>
  );
}
