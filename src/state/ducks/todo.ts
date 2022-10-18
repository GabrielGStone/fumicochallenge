import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todos: {}[];
}

const initialState: InitialState = {
  todos: [
    {
      id: 1,
      title: "títilo do lembrete",
      details: "detalhes do lembrete",
      isChecked: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editTodo: (state, action) => {
      state.todos.map((data: any) => {
        if (action.payload.id === data.id) return;
      });
      state.todos;
    },
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
