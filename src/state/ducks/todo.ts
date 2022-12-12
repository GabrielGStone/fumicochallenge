import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todos: any;
  activeTodo: any;
}

const initialState: InitialState = {
  todos: [
    {
      id: 1,
      title: "títilo do lembrete, bele?",
      details: "detalhes A",
      isChecked: false,
    },
  ],
  activeTodo: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editTodo: (state, action) => {
      // state.todos.find((todo: any) => {
      //   todo.id === action.payload.id;
      // });
    },

    setTodo: (state, action) => {
      state.todos.push({
        id: new Date(),
        title: action.payload.title,
        details: action.payload.details,
        isChecked: false,
      });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
    },

    setActiveTodo: (state, action) => {
      state.activeTodo = action.payload;
    },
  },
});

export const { actions, reducer } = todoSlice;
