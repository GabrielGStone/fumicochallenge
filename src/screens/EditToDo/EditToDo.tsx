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
import { useDispatch, useSelector } from "react-redux";
import { RootState, todoActions } from "../../state";
import ErrorMessage from "../../components/ErrorMessage";
import { useEffect } from "react";

const schema = yup
  .object({
    title: yup.string().trim().required(errorMessages.titleRequired),
    details: yup.string().required(errorMessages.detailsRequired),
  })
  .required();

const EditToDo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todos = useSelector((state: RootState) => state.todo.tasks);
  const id = useSelector((state: RootState) => state.todo.activeTodo);

  const activeTodo = todos.find((element: any) => element.id === id);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      details: "",
    },
  });
  const onSubmit = (data: any) => {
    const payload = { ...data, id: id, isChecked: activeTodo?.isChecked };

    dispatch(todoActions.editTodo(payload));
    navigate("/todo-list");
  };

  setValue("title", activeTodo.title);
  setValue("details", activeTodo.details);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ScreenContainer>
        <Header />
        <Layout>
          <Title>editar</Title>
          <TextInput
            type=""
            placeholder={activeTodo.title}
            control={control}
            name="title"
            error={errors["title"]}
          >
            título
          </TextInput>
          <TextInput
            placeholder={activeTodo.details}
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
          leftText="< voltar"
          leftAction={() => navigate("/todo-list")}
        ></NavButtons>
      </ScreenContainer>
    </form>
  );
};

export default EditToDo;
