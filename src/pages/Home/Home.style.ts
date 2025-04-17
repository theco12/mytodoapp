import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  margin: 50px auto;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fefefe;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const AddButton = styled.button`
  padding: 10px 16px;
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #434190;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 8px;
  background-color: #f1f5f9;
  border-radius: 8px;
`;

export const Checkbox = styled.input``;

export const TodoText = styled.span<{ checked: boolean }>`
  flex: 1;
  font-size: 16px;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: ${({ checked }) => (checked ? "#999" : "#333")};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e53e3e;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #c53030;
  }
`;
