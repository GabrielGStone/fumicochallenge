import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import TextInput from "../../components/TextInput/TextInput";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Header from "../../components/Header/Header";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScreenContainer>
        <Header></Header>
        <Layout>
          <Title>login</Title>
          <TextInput type="email" placeholder="email">
            seu e-mail
          </TextInput>
          <TextInput type="password" placeholder="********">
            senha
          </TextInput>
        </Layout>
        <NavButtons
          rightText="fazer login"
          rightAction={() => navigate("/todo-list")}
        ></NavButtons>
      </ScreenContainer>
    </>
  );
};

export default Login;
