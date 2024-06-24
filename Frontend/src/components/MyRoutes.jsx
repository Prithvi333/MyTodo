import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import HeroSection from "./pages/HeroSection";
import LogIn from "./pages/LogIn";
import Todo from "./pages/Todo";
import PrivateRoute from "./PrivateRoute";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<LogIn />} />
      <Route
        path="todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
