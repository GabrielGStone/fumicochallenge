import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import TextInput from "../../components/TextInput/TextInput";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Header from "../../components/Header/Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorMessages } from "../../components/ErrorMessages/error_messages";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../state/actions";
import { useEffect } from "react";
import { RootState } from "../../state";

const schema = yup
  .object({
    email: yup.string().trim().required(errorMessages.emailRequired),
    password: yup.string().required(errorMessages.passwordRequired),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    dispatch(authActions.login(data));
    navigate("/todo-list");
    reset();
  };

  useEffect(() => {
    token && navigate("/todo-list");
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header />
          <Layout>
            <Title>login</Title>
            <TextInput
              type="email"
              placeholder="email"
              control={control}
              name="email"
              error={errors.email}
            >
              seu e-mail
            </TextInput>
            <TextInput
              type="password"
              placeholder="********"
              control={control}
              name="password"
              error={errors.password}
            >
              senha
            </TextInput>
          </Layout>
          <NavButtons rightText="fazer login"></NavButtons>
        </form>
      </ScreenContainer>
    </>
  );
};

export default Login;
