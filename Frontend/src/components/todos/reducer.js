import {
  TODOLODDING,
  TODOERROR,
  FETCHTODO,
  ADDTASK,
  DELETETASK,
  COMPLETETASK,
} from "./actionType";

const todoData = { userId: "", todos: [], isLoading: false, isError: false };
const deleteOrComplete = (state, payload) => ({
  ...state,
  isLoading: false,
  todos: state.todos.filter((item) => item.taskId !== payload),
});
export const todoReducer = (state = todoData, action) => {
  const { type, payload } = action;

  switch (type) {
    case TODOLODDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCHTODO: {
      return {
        ...state,
        isLoading: false,
        todos: payload.filter((item) => !item.deleted && !item.complete),
      };
    }

    case TODOERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    case ADDTASK: {
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, payload],
      };
    }
    case DELETETASK: {
      return deleteOrComplete(state, payload);
    }
    case COMPLETETASK: {
      return deleteOrComplete(state, payload);
    }

    default: {
      return state;
    }
  }
};
