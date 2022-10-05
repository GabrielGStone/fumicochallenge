import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";

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
        <TextInput type="" placeholder="título do lembrete">
          título
        </TextInput>
        <TextInput type="" placeholder="descrição...">
          descrição
        </TextInput>
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
