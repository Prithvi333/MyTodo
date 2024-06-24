import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
export default function TodoList() {
  const todos = useSelector((store) => store.todoReducer.todos);
  return (
    <div className="  w-4/5">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">My Todos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {todos?.length !== 0 &&
            todos.map((element) => (
              <TodoCard key={element.taskId} todoItem={element} />
            ))}
        </div>
      </div>
    </div>
  );
}
