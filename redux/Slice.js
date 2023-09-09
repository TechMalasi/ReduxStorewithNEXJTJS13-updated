"use client";
import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todotask",
  initialState: {
    todo: [],
  },
  reducers: {
    save: (state, param) => {
        console.log(param)
      const { payload } = param;
      state.todo = [...state.todo, payload];
    },
    remove: (state, param) => {
      const { payload } = param;
      const temp = [...state.todo];
      state.todo = temp.filter((item, itemIndex) => {
        return itemIndex !== payload;
      });
    },
  },
});
console.log(todoslice)
const {actions,reducer} = todoslice
export const {save,remove} = actions;
export default reducer;