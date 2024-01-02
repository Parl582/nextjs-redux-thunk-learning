"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { getTodo } from "@/redux/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Todos() {
  const dispatch = useDispatch<AppDispatch>();

  const todo = useSelector((state: RootState) => state.todo.todo);
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold px-4 py-4"> Redux Thunk Learning </h1>
      <ul className="flex gap-2 flex-wrap p-4">
        {todo?.map((elm) => (
          <li key={elm.id} className="px-2 py-4 border w-max">
            {elm.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
