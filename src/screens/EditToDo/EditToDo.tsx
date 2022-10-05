import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const EditToDo = () => {
  const navigate = useNavigate();

  const editToDo = () => {
    navigate("/todo-list");
  };

  return (
    <ScreenContainer>
      <Header />
      <Layout>
        <Title>editar</Title>
      </Layout>
      <NavButtons
        rightText="adicionar >"
        rightAction={editToDo}
        leftText="< voltar"
        leftAction={() => navigate("/todo-list")}
      ></NavButtons>
    </ScreenContainer>
  );
};

export default EditToDo;
