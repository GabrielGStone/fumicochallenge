import { Container, HeaderText } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <Container onClick={handleNavigate}>
        <HeaderText>todo list</HeaderText>
      </Container>
    </>
  );
};

export default Header;
