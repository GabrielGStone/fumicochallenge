import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todoActions } from "../../state";
import { CheckboxContainer, TodoCheckbox, TodoText } from "./styles";

interface ToDoProps {
  isChecked: boolean;
  title: string;
  id: any;
  details: string;
}
const ToDoItem: FC<ToDoProps> = ({ title, isChecked, id, details }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToDetails = () => {
    dispatch(todoActions.setActiveTodo(id));
    navigate("/todo-details");
  };

  const checkTodo = (e: any) => {
    console.log("e", e);
    const payload = {
      isChecked: e,
      id: id,
      title: title,
      details: details,
    };
    console.log(payload);
    dispatch(todoActions.editTodo(payload));
  };

  return (
    <CheckboxContainer>
      <TodoText onClick={() => goToDetails()} isChecked={isChecked}>
        {title}
      </TodoText>
      <TodoCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={(e: any) => checkTodo(e.target.checked)}
      ></TodoCheckbox>
    </CheckboxContainer>
  );
};

export default ToDoItem;
