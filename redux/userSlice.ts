import {
  asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type todos = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

interface UserType {
  todo: todos[] | null;
  pending: boolean;
  error: boolean;
}

const initialState: UserType = {
  todo: null,
  pending: false,
  error: false,
};

export const getTodo = createAsyncThunk("user/getTodo", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  } catch (e) {
    return e;
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTodo.pending, (state) => {
        state.pending = true;
        console.log("pending");
      })
      .addCase(getTodo.fulfilled, (state, action: PayloadAction<any>) => {
        state.todo = action.payload;
        state.pending = false;
      })
      .addCase(getTodo.rejected, (state) => {
        state.error = true;
        state.pending = false;
      });
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
