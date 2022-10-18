import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CheckboxContainer, TodoCheckbox, TodoText } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState, todoActions } from "../../state";

const ToDoList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state: RootState) => state.todo.todos);

  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>lembretes</Title>
        {todo.map((data: any) => (
          <CheckboxContainer>
            <TodoText onClick={() => navigate("/todo-details")}>
              {data.title}
            </TodoText>
            <TodoCheckbox
              type="checkbox"
              checked={data.checked}
              onChange={(e: any) => dispatch(todoActions.editTodo(e.value))}
            ></TodoCheckbox>
          </CheckboxContainer>
        ))}
      </Layout>
      <NavButtons
        rightText="Novo Lembrete +"
        rightAction={() => navigate("/create-todo")}
      ></NavButtons>
    </ScreenContainer>
  );
};

export default ToDoList;
