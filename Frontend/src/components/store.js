import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { registerReducer } from "./LoginAndRegister/reducer";
import { thunk } from "redux-thunk";
import { todoReducer } from "./todos/reducer";
const rootReducer = combineReducers({ registerReducer, todoReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
