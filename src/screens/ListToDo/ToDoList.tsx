import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CheckboxContainer, TodoCheckbox, TodoText } from "./styles";

const ToDoList = () => {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <Header></Header>
      <Layout>
        <Title>lembretes</Title>
        <CheckboxContainer>
          <TodoText>texto do lembrete</TodoText>
          <TodoCheckbox type="checkbox"></TodoCheckbox>
        </CheckboxContainer>
      </Layout>
      <NavButtons
        rightText="Novo Lembrete +"
        rightAction={() => navigate("/create-todo")}
      ></NavButtons>
    </ScreenContainer>
  );
};

export default ToDoList;
