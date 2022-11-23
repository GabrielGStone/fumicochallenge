import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todos: any;
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
      // return  state.todos.find((todo) => todo.id === action.payload )  ;
    },

    setTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: new Date(),
          title: action.payload.title,
          details: action.payload.details,
          isChecked: action.payload.isChecked,
        },
      ];
    },

    deleteTodo: (state, action) => {
      // return state.todos.filter((todo) => todo !== action.payload);
    },
  },
});

export const { actions, reducer } = todoSlice;
