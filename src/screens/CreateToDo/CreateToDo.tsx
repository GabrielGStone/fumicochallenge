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
import { todoActions } from "../../state";
import { useDispatch } from "react-redux";

const schema = yup
  .object({
    title: yup.string().trim().required(errorMessages.titleRequired),
    details: yup.string().required(errorMessages.detailsRequired),
  })
  .required();

const CreateToDo = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      details: "",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(todoActions.setTodo(data));
    navigate("/todo-list");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ScreenContainer>
        {/* {Object.values(errors).map((e) => (
          <>
            <p>{e.message}</p>
          </>
        ))} */}
        <Header />
        <Layout>
          <Title>novo lembrete</Title>
          <TextInput
            type=""
            placeholder="Título do lembrete"
            control={control}
            name="title"
            error={errors["title"]}
          >
            título
          </TextInput>
          <TextInput
            type=""
            placeholder="descrição..."
            isDiscription
            control={control}
            name="details"
            error={errors["details"]}
          >
            descrição
          </TextInput>
        </Layout>
        <NavButtons
          rightText="adicionar >"
          rightProps={{
            type: "submit",
          }}
          leftText="< voltar"
          leftAction={() => navigate("/todo-list")}
        ></NavButtons>
      </ScreenContainer>
    </form>
  );
};

export default CreateToDo;
