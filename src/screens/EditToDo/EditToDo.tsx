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

const schema = yup
  .object({
    title: yup.string().trim().required(errorMessages.titleRequired),
    description: yup.string().required(errorMessages.descriptionRequired),
  })
  .required();

const EditToDo = () => {
  const navigate = useNavigate();

  const editToDo = () => {
    navigate("/todo-list");
  };

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
    console.log("edit:", data);
    reset();
  };

  return (
    <ScreenContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header />
        <Layout>
          <Title>editar</Title>
          <TextInput
            type=""
            placeholder="título do lembrete"
            control={control}
            name="title"
          >
            título
          </TextInput>
          <TextInput
            placeholder="lorem"
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
          rightAction={editToDo}
          leftText="< voltar"
          leftAction={() => navigate("/todo-list")}
        ></NavButtons>
      </form>
    </ScreenContainer>
  );
};

export default EditToDo;
