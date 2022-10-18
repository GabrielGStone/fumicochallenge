import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import TitleText from "../../components/TitleText/TitleText";
import { ButtonsContainer, EditButton, EditImage } from "./styles";

interface DetailsProps {
  id?: string;
}
const ToDoDetails: FC<DetailsProps> = ({ id }) => {
  const navigate = useNavigate();
  const removeTodo = () => {
    navigate(-1);
  };

  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>detalhes</Title>
        <TitleText title="lorem" text="lorem" />
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
