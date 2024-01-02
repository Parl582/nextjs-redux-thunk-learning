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
      <ul>
        {todo?.map((elm) => (
          <li key={elm.id}> {elm.id} </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
