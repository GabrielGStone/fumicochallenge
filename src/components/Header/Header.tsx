import { Container, HeaderText } from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { useEffect } from "react";

const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    !token && navigate("/");
  }, []);

  return (
    <>
      <Container onClick={handleNavigate}>
        <HeaderText>todo list</HeaderText>
      </Container>
    </>
  );
};

export default Header;
