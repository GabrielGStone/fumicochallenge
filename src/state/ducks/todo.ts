import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: any;
  activeTodo: any;
}

const initialState: InitialState = {
  tasks: [
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
      const index = state.tasks.indexOf(
        (todo: any) => todo.id === action.payload.id
      );

      state.tasks[index] = {
        id: action.payload.id,
        title: action.payload.title,
        details: action.payload.details,
        isChecked: action.payload.isChecked,
      };
    },

    setTodo: (state, action) => {
      state.tasks.push({
        id: new Date(),
        title: action.payload.title,
        details: action.payload.details,
        isChecked: false,
      });
    },

    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter(
        (todo: any) => todo.id !== action.payload
      );
    },

    setActiveTodo: (state, action) => {
      state.activeTodo = action.payload;
    },
  },
});

export const { actions, reducer } = todoSlice;
