import React, { useState } from "react";
import {
  Container,
  Title,
  InputWrapper,
  Input,
  AddButton,
  TodoList,
  TodoItem,
  RemoveButton,
  Checkbox,
  TodoText,
} from "./Home.style";

interface Todo {
  text: string;
  checked: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, checked: false }]);
    setNewTodo("");
  };

  const toggleCheck = (index: number) => {
    const updated = [...todos];
    updated[index].checked = !updated[index].checked;
    setTodos(updated);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>📝 나의 투두리스트</Title>
      <InputWrapper>
        <Input
          type="text"
          placeholder="할 일을 입력하세요"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTodo()}
        />
        <AddButton onClick={addTodo}>추가</AddButton>
      </InputWrapper>
      <TodoList>
        {todos.map((todo, idx) => (
          <TodoItem key={idx}>
            <Checkbox type="checkbox" checked={todo.checked} onChange={() => toggleCheck(idx)} />
            <TodoText checked={todo.checked}>{todo.text}</TodoText>
            <RemoveButton onClick={() => removeTodo(idx)}>삭제</RemoveButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default Home;
