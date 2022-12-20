import styled, { css } from "styled-components";

export const TodoCheck = styled.input.attrs({ type: "checkbox" })`
  width: 200px;
  color: #000;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #f4f4f4; */
  border: 1px #000 solid;
  padding: 8px;
  width: 100%;
  margin-bottom: 16px;
  height: 42px;
`;
export const TodoCheckbox = styled.input`
  height: 20px;
  right: 0;
`;

interface TodoProps {
  isChecked?: boolean;
}

const checkedStyle = css`
  /* text-decoration: line-through */
  /* color: #dadce0; */
`;

export const TodoText = styled.label<TodoProps>`
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
  max-width: 270px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(isChecked) => isChecked && checkedStyle}
`;
