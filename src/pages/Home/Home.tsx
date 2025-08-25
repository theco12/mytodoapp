import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Title,
  DateNavigation,
  NavButton,
  CurrentDate,
  CalendarModal,
  CalendarContent,
  CalendarHeader,
  CalendarTitle,
  CalendarGrid,
  CalendarDay,
  CalendarDate,
  CloseButton,
  InputWrapper,
  Input,
  AddButton,
  TodoList,
  TodoItem,
  RemoveButton,
  Checkbox,
  TodoText,
  EmptyState,
} from "./Home.style";

interface Todo {
  id: string;
  text: string;
  checked: boolean;
  date: string;
  createdAt?: string;
}

// 로컬 스토리지 키
const STORAGE_KEY = "todos_data";

// 로컬 스토리지 헬퍼 함수들
const getTodosFromStorage = (): Record<string, Todo[]> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return {};
  }
};

const saveTodosToStorage = (todosByDate: Record<string, Todo[]>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todosByDate));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const Home: React.FC = () => {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const [selectedDate, setSelectedDate] = useState(today);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
  };

  // 날짜 변경 함수
  const changeDate = (direction: "prev" | "next") => {
    const currentDate = new Date(selectedDate);
    if (direction === "prev") {
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    const newDate = currentDate.toISOString().slice(0, 10);
    setSelectedDate(newDate);
  };

  // 캘린더 관련 함수들
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const generateCalendarDays = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];

    // 이전 달의 마지막 날들
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, prevMonthDays - i),
        isCurrentMonth: false,
      });
    }

    // 현재 달의 날들
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
        isCurrentMonth: true,
      });
    }

    // 다음 달의 첫 날들
    const remainingDays = 42 - days.length; // 6주 * 7일 = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const handleDateSelect = (date: Date) => {
    const dateString = date.toISOString().slice(0, 10);
    setSelectedDate(dateString);
    setIsCalendarOpen(false);
  };

  const isToday = (date: Date) => {
    return date.toISOString().slice(0, 10) === today;
  };

  const isSelected = (date: Date) => {
    return date.toISOString().slice(0, 10) === selectedDate;
  };

  // 🔄 날짜별 투두 불러오기 (로컬 스토리지)
  useEffect(() => {
    console.log("Loading todos for date:", selectedDate);
    setError(null);
    setIsLoading(true);

    try {
      const todosByDate = getTodosFromStorage();
      const dateTodos = todosByDate[selectedDate] || [];
      console.log("Loaded todos:", dateTodos);
      setTodos(dateTodos);
    } catch (error) {
      console.error("Error loading todos:", error);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  }, [selectedDate]);

  const addTodo = async () => {
    if (newTodo.trim() === "") return;

    try {
      console.log("Adding todo:", newTodo, "for date:", selectedDate);
      setIsLoading(true);
      setError(null);

      const newTodoItem: Todo = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        text: newTodo.trim(),
        checked: false,
        date: selectedDate,
        createdAt: new Date().toISOString(),
      };

      const todosByDate = getTodosFromStorage();
      const dateTodos = todosByDate[selectedDate] || [];
      const updatedTodos = [...dateTodos, newTodoItem];

      todosByDate[selectedDate] = updatedTodos;
      saveTodosToStorage(todosByDate);

      setTodos(updatedTodos);
      setNewTodo("");
      console.log("Todo added successfully:", newTodoItem);
    } catch (error) {
      console.error("Error adding todo:", error);
      setError("할 일 추가 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCheck = async (id: string, current: boolean) => {
    try {
      console.log("Toggling todo:", id, "from", current, "to", !current);
      setError(null);

      const todosByDate = getTodosFromStorage();
      const dateTodos = todosByDate[selectedDate] || [];
      const updatedTodos = dateTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !current } : todo,
      );

      todosByDate[selectedDate] = updatedTodos;
      saveTodosToStorage(todosByDate);

      setTodos(updatedTodos);
      console.log("Todo updated successfully");
    } catch (error) {
      console.error("Error updating todo:", error);
      setError("할 일 업데이트 중 오류가 발생했습니다.");
    }
  };

  const removeTodo = async (id: string) => {
    try {
      console.log("Removing todo:", id);
      setError(null);

      const todosByDate = getTodosFromStorage();
      const dateTodos = todosByDate[selectedDate] || [];
      const updatedTodos = dateTodos.filter((todo) => todo.id !== id);

      todosByDate[selectedDate] = updatedTodos;
      saveTodosToStorage(todosByDate);

      setTodos(updatedTodos);
      console.log("Todo removed successfully");
    } catch (error) {
      console.error("Error removing todo:", error);
      setError("할 일 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      addTodo();
    }
  };

  const calendarDays = generateCalendarDays();
  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <Container>
      <Content>
        <Title>🗓️ 날짜별 투두리스트</Title>

        <DateNavigation>
          <NavButton onClick={() => changeDate("prev")}>‹</NavButton>
          <CurrentDate onClick={() => setIsCalendarOpen(true)}>
            {formatDate(selectedDate)}
          </CurrentDate>
          <NavButton onClick={() => changeDate("next")}>›</NavButton>
        </DateNavigation>

        {error && (
          <div
            style={{
              color: "#e53e3e",
              backgroundColor: "#fed7d7",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "20px",
              textAlign: "center",
            }}>
            {error}
          </div>
        )}

        <InputWrapper>
          <Input
            type="text"
            placeholder="할 일을 입력하세요"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <AddButton onClick={addTodo} disabled={isLoading}>
            {isLoading ? "추가 중..." : "추가"}
          </AddButton>
        </InputWrapper>

        <TodoList>
          {isLoading && todos.length === 0 ? (
            <EmptyState>로딩 중...</EmptyState>
          ) : todos.length === 0 ? (
            <EmptyState>이 날의 할 일이 없습니다. 새로운 할 일을 추가해보세요! ✨</EmptyState>
          ) : (
            todos.map((todo) => (
              <TodoItem key={todo.id}>
                <Checkbox
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => toggleCheck(todo.id, todo.checked)}
                  disabled={isLoading}
                />
                <TodoText checked={todo.checked}>{todo.text}</TodoText>
                <RemoveButton onClick={() => removeTodo(todo.id)} disabled={isLoading}>
                  삭제
                </RemoveButton>
              </TodoItem>
            ))
          )}
        </TodoList>
      </Content>

      {/* 캘린더 모달 */}
      <CalendarModal isOpen={isCalendarOpen} onClick={() => setIsCalendarOpen(false)}>
        <CalendarContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setIsCalendarOpen(false)}>×</CloseButton>

          <CalendarHeader>
            <NavButton
              onClick={() =>
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
              }>
              ‹
            </NavButton>
            <CalendarTitle>
              {currentMonth.getFullYear()}년 {monthNames[currentMonth.getMonth()]}
            </CalendarTitle>
            <NavButton
              onClick={() =>
                setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
              }>
              ›
            </NavButton>
          </CalendarHeader>

          <CalendarGrid>
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <CalendarDay key={day}>{day}</CalendarDay>
            ))}
            {calendarDays.map((day, index) => (
              <CalendarDate
                key={index}
                isSelected={isSelected(day.date)}
                isToday={isToday(day.date)}
                isCurrentMonth={day.isCurrentMonth}
                onClick={() => handleDateSelect(day.date)}>
                {day.date.getDate()}
              </CalendarDate>
            ))}
          </CalendarGrid>
        </CalendarContent>
      </CalendarModal>
    </Container>
  );
};

export default Home;
