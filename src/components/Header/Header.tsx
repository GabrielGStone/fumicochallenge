import { Container, HeaderText, LogoutButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { useEffect } from "react";
import { authActions } from "../../state/actions";

const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const Logout = async () => {
    dispatch(authActions.logout);
  };

  useEffect(() => {
    !token && navigate("/");
    //eslint-disable-next-line
  }, [token]);

  return (
    <>
      <Container>
        <div></div>
        <HeaderText onClick={handleNavigate}>todo list</HeaderText>
        <LogoutButton onClick={Logout}>Logout</LogoutButton>
      </Container>
    </>
  );
};

export default Header;
