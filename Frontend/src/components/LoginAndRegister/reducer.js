import {
  LOADING,
  REGISTRATIONSUCCESS,
  ERROR,
  LOGINSUCCESS,
  LOGOUT,
} from "./actionType";

const user = {
  isError: false,
  isLoading: false,
  isAuth: false,
  token: "",
};
export const registerReducer = (state = user, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTRATIONSUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
      };
    }

    case LOGINSUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    }

    case ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
    }

    case LOGOUT: {
      return user;
    }
    default: {
      return state;
    }
  }
};
