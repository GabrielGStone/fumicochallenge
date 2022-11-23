import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CheckboxContainer, TodoCheckbox, TodoText } from "./styles";

interface ToDoProps {
  isChecked?: boolean;
  title?: string;
}
const ToDoItem: FC<ToDoProps> = ({ title, isChecked }) => {
  const navigate = useNavigate();

  return (
    <CheckboxContainer>
      <TodoText onClick={() => navigate("/todo-details")}>{title}aa</TodoText>
      <TodoCheckbox
        type="checkbox"
        // checked={isChecked}
        // onChange={(e: any) => dispatch(todoActions.editTodo(e.value))}
      ></TodoCheckbox>
    </CheckboxContainer>
  );
};

export default ToDoItem;
