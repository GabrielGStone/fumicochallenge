import { type } from "os";
import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  width: 100%;
`;
export const TodoCheckbox = styled.input`
  height: 20px;
  right: 0;
`;

export const TodoText = styled.label`
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
`;
