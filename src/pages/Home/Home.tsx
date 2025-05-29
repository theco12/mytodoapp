import React, { useState, useEffect } from "react";
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
  DateSelector,
} from "./Home.style";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

interface Todo {
  id: string;
  text: string;
  checked: boolean;
  date: string;
}

const Home: React.FC = () => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const [selectedDate, setSelectedDate] = useState(today);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // 🔄 날짜별 투두 불러오기
  const fetchTodos = async (date: string) => {
    const q = query(collection(db, "todos"), where("date", "==", date));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Todo, "id">),
    }));
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos(selectedDate);
  }, [selectedDate]);

  const addTodo = async () => {
    if (newTodo.trim() === "") return;
    const docRef = await addDoc(collection(db, "todos"), {
      text: newTodo,
      checked: false,
      date: selectedDate,
    });
    setTodos([...todos, { id: docRef.id, text: newTodo, checked: false, date: selectedDate }]);
    setNewTodo("");
  };

  const toggleCheck = async (id: string, current: boolean) => {
    await updateDoc(doc(db, "todos", id), { checked: !current });
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !current } : todo)));
  };

  const removeTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Title>🗓️ 날짜별 투두리스트</Title>
      <DateSelector
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <InputWrapper>
        <Input
          type="text"
          placeholder="할 일을 입력하세요"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && addTodo()}
        />
        <AddButton onClick={addTodo}>추가</AddButton>
      </InputWrapper>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <Checkbox
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleCheck(todo.id, todo.checked)}
            />
            <TodoText checked={todo.checked}>{todo.text}</TodoText>
            <RemoveButton onClick={() => removeTodo(todo.id)}>삭제</RemoveButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default Home;
