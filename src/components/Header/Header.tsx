import { Container, HeaderText } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container onClick={() => navigate("/")}>
        <HeaderText>desafio fumico</HeaderText>
      </Container>
    </>
  );
};

export default Header;
