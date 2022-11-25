import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todoActions } from "../../state";
import { CheckboxContainer, TodoCheckbox, TodoText } from "./styles";

interface ToDoProps {
  isChecked?: boolean;
  title?: string;
  id?: any;
}
const ToDoItem: FC<ToDoProps> = ({ title, isChecked, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CheckboxContainer>
      <TodoText onClick={() => navigate("/todo-details")}>{title}</TodoText>
      <TodoCheckbox
        type="checkbox"
        checked={isChecked}
        // onChange={(e: any) => dispatch(todoActions.editTodo(id, e.value))}
      ></TodoCheckbox>
    </CheckboxContainer>
  );
};

export default ToDoItem;
