import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todos: any;
  activeTodo: any;
}

const initialState: InitialState = {
  todos: [
    {
      id: 5,
      title: "títilo do lembrete, bele?",
      details:
        "detalhes do lembreteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
      // return  state.todos.find((todo) => todo.id === action.payload )  ;
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
      // return state.todos.filter((todo) => todo !== action.payload);
    },

    setActiveTodo: (state, action) => {
      state.activeTodo = action.payload;
    },
  },
});

export const { actions, reducer } = todoSlice;
