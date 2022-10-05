import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const CreateToDo = () => {
  const navigate = useNavigate();
  const addToDo = () => {
    navigate("/todo-list");
  };

  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>novo lembrete</Title>
      </Layout>
      <NavButtons
        rightText="adicionar >"
        rightAction={addToDo}
        leftText="< voltar"
        leftAction={() => navigate("/todo-list")}
      ></NavButtons>
    </ScreenContainer>
  );
};

export default CreateToDo;
