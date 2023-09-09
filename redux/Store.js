import { configureStore,combineReducers } from "@reduxjs/toolkit";

import todotask from "./Slice";

const rootReducer = combineReducers({
    todolist: todotask,
    //add all your reducers here
  },);

export const store = configureStore({
    reducer: rootReducer,
  });