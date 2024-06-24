import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Todo from "./pages/Todo";
import { logout } from "./LoginAndRegister/actions";
export default function Header() {
  const { isAuth, token, isError } = useSelector(
    (store) => store.registerReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout(token)).then(() => {
      navigate("/");
    });
  };

  return (
    <header className="text-gray-600 body-font bg-indigo-300 sticky top-0  ">
      <div className="  flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Todo</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {/* <Link to={"/todo"} className="mr-5 hover:text-gray-900">
            My Todo
          </Link>
          <a href="" className="mr-5 hover:text-gray-900">
            Second Link
          </a>
          <a href="" className="mr-5 hover:text-gray-900">
            Third Link
          </a>
          <a href="" className="mr-5 hover:text-gray-900">
            Fourth Link
          </a> */}
        </nav>
        {isAuth && (
          <button
            onClick={logoutUser}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
