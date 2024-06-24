import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage";
export default function HeroSection() {
  const navigate = useNavigate();
  const error = useSelector((store) => store.registerReducer.isError);

  return (
    <div>
      {error && (
        <ErrorMessage
          message={"Please enter valid credentials"}
          duration={2000}
        />
      )}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              TaskMaster
            </h1>
            <p className="mb-8 leading-relaxed">
              A to-do app is a software application designed to help users
              manage their tasks and stay organized. The primary purpose of a
              to-do app is to allow users to create, track, and manage a list of
              tasks that need to be completed. These tasks can range from simple
              daily chores to complex projects. Here’s a brief overview of the
              key features and functionalities typically found in a to-do app
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/signin");
                }}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                SignIn
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
