import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";

interface DetailsProps {
  id?: string;
}
const ToDoDetails: FC<DetailsProps> = ({ id }) => {
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>detalhes</Title>
      </Layout>
      <NavButtons
        rightText="voltar"
        rightAction={() => navigate(-1)}
      ></NavButtons>
    </ScreenContainer>
  );
};

export default ToDoDetails;
