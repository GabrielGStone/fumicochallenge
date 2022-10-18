import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todos: {}[];
}

const initialState: InitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: action.payload.id,
          title: action.payload.title,
          details: action.payload.details,
          isChecked: action.payload.isChecked,
        },
      ];
    },
  },
});

export const { actions, reducer } = todoSlice;
