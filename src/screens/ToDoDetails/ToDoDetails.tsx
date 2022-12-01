import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import TitleText from "../../components/TitleText/TitleText";
import { RootState } from "../../state";
import { ButtonsContainer, EditButton, EditImage } from "./styles";

const ToDoDetails = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const id = useSelector((state: RootState) => state.todo.activeTodo);
  const navigate = useNavigate();
  const removeTodo = () => {
    navigate(-1);
  };

  const activeTodo = todos.find((element: any) => element.id === id);

  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>detalhes</Title>
        <TitleText title={activeTodo.title} text={activeTodo.details} />
        <ButtonsContainer>
          <EditButton onClick={removeTodo}>
            <EditImage src="./assets/trash.svg" />
          </EditButton>
          <EditButton onClick={() => navigate("/edit-todo")}>
            <EditImage src="./assets/pencil.svg" />
          </EditButton>
        </ButtonsContainer>
      </Layout>
      <NavButtons
        rightText="voltar"
        rightAction={() => navigate(-1)}
      ></NavButtons>
    </ScreenContainer>
  );
};

export default ToDoDetails;
