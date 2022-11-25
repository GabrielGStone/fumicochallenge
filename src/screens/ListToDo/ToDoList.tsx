import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CheckboxContainer, TodoCheckbox, TodoText } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState, todoActions } from "../../state";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const navigate = useNavigate();

  const todo = useSelector((state: RootState) => state.todo.todos);

  console.log(todo);
  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>lembretes</Title>
        {todo.map((data: any) => (
          <ToDoItem title={data.title} isChecked={data.checked} />
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
