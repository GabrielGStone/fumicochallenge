import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateToDo from "./screens/CreateToDo/CreateToDo";
import EditToDo from "./screens/EditToDo/EditToDo";
import ToDoList from "./screens/ListToDo/ToDoList";
import Login from "./screens/Login/Login";
import ToDoDetails from "./screens/ToDoDetails/ToDoDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<ToDoList />} path="/todo-list" />
          <Route element={<CreateToDo />} path="/create-todo" />
          <Route element={<ToDoDetails />} path="/todo-details" />
          <Route element={<EditToDo />} path="/edit-todo" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
