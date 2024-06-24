import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../LoginAndRegister/actions";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "../SuccessMessage";
const defaultUserData = { userName: "", userEmail: "", userPassword: "" };
export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerationFlag, setRegistrationFlag] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);

  const handleFieldChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const registerUserHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData, navigate))
      .then(() => {
        setRegistrationFlag(true);
      })
      .catch(() => {
        setRegistrationFlag(false);
      });
  };
  return (
    <section className="text-gray-600 body-font">
      {registerationFlag && (
        <SuccessMessage message={"Registration successfull"} duration={1000} />
      )}
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Stay Organized, Stay Productive!
          </h1>
          <p className="leading-relaxed mt-4">
            Welcome to our TaskMaster the ultimate to-do app designed to
            streamline your tasks and boost your productivity. Whether you're
            managing work projects, planning personal goals, or just trying to
            keep track of daily errands, our app has got you covered!
          </p>
        </div>
        <form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="userName"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="userName"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              autoComplete="false"
              onChange={handleFieldChange}
            />
          </div>
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
              autoComplete="false"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleFieldChange}
            />
          </div>
          <button
            type="submit"
            onClick={registerUserHandler}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Register to explore more about our app
          </p>
        </form>
      </div>
    </section>
  );
}
