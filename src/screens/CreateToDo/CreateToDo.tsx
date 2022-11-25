import Layout from "../../components/Layout/Layout";
import NavButtons from "../../components/NavButtons/NavButtons";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorMessages } from "../../components/ErrorMessages/error_messages";
import { RootState, todoActions } from "../../state";
import { useDispatch, useSelector } from "react-redux";

const schema = yup
  .object({
    title: yup.string().trim().required(errorMessages.titleRequired),
    description: yup.string().required(errorMessages.descriptionRequired),
  })
  .required();

const CreateToDo = () => {
  const dispatch = useDispatch;

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log("data", data);
    // dispatch(todoActions.setTodo(data));
    reset();
    navigate("/todo-list");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ScreenContainer>
        <Header />
        <Layout>
          <Title>novo lembrete</Title>
          <TextInput
            type=""
            placeholder="Título do lembrete"
            control={control}
            name="title"
          >
            título
          </TextInput>
          <TextInput
            type=""
            placeholder="descrição..."
            isDiscription
            control={control}
            name="description"
          >
            descrição
          </TextInput>
          <button type="submit">aaaa</button>
        </Layout>
        <NavButtons
          rightText="adicionar >"
          leftText="< voltar"
          // leftAction={() => navigate("/todo-list")}
        ></NavButtons>
      </ScreenContainer>
    </form>
  );
};

export default CreateToDo;
