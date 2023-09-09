"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../../redux/Slice";
import { remove } from "../../redux/Slice";
export const AccessStore = () => {

  const { todolist } = useSelector((state) => state);


  const dispatch = useDispatch();
  const [task,setTask]=useState("")

  const handleTask=(e)=>{
    setTask(e.target.value)
  }
  const handleAdd = () => {
    dispatch(save(task));
    setTask("")
  };

  const handleRemove =(index) => {
    console.log(index)
     dispatch(remove(index));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {todolist.todo.length == 0 ? (
        <p>Please Add Task</p>
      ) : (
        todolist.todo &&
        todolist.todo.map((item,index) => {
          return (
            <div key={index} className="flex justify-between border-2 border-white w-1/2 p-2">
              <div className="px-5">{item}</div>
              <div className="px-5">
              <button
          onClick={()=>handleRemove(index)}
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >Remove</button>
              </div>
            </div>
          );
        })
      )}
      <p className="mt-10 flex justify-between items-center w-1/2">
        <input type="text" value={task} onChange={handleTask} className="p-2 text-black h-10 mr-2 w-full"/>
        <button
          onClick={handleAdd}
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Add
        </button>
      </p>
    </div>
  );
};