import styled, { css } from "styled-components";

export const TodoCheck = styled.input.attrs({ type: "checkbox" })`
  width: 200px;
  color: #000;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #dadce0; */
  width: 100%;
`;
export const TodoCheckbox = styled.input`
  height: 20px;
  right: 0;
`;

interface TodoProps {
  isChecked: boolean;
}

const checkedStyle = css`
  text-decoration: line-through;
  color: #dadce0;
`;

export const TodoText = styled.label<TodoProps>`
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;

  ${(isChecked) => isChecked && checkedStyle}
`;
