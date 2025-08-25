import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  background: white;
  border: 1px solid #e2e8f0;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 700;
  color: #2d3748;
`;

export const DateNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

export const NavButton = styled.button`
  background: white;
  border: 1px solid #cbd5e0;
  color: #4a5568;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;

  &:hover {
    background: #f7fafc;
    border-color: #a0aec0;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CurrentDate = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  cursor: pointer;
  padding: 12px 20px;
  background: white;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  transition: all 0.2s ease;
  min-width: 200px;
  text-align: center;

  &:hover {
    background: #f7fafc;
    border-color: #a0aec0;
    transform: translateY(-1px);
  }
`;

export const CalendarModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const CalendarContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 90%;
  border: 1px solid #e2e8f0;
  animation: ${slideIn} 0.3s ease-out;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 20px;
`;

export const CalendarDay = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #718096;
  padding: 8px;
`;

export const CalendarDate = styled.button<{
  isSelected?: boolean;
  isToday?: boolean;
  isCurrentMonth?: boolean;
}>`
  width: 100%;
  height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: ${({ isSelected, isToday, isCurrentMonth }) => {
    if (isSelected) return "#3182ce";
    if (isToday) return "#ebf8ff";
    return "white";
  }};
  color: ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) return "white";
    if (isCurrentMonth) return "#2d3748";
    return "#cbd5e0";
  }};
  font-weight: ${({ isSelected, isToday }) => (isSelected || isToday ? "600" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#2c5aa0" : "#f7fafc")};
    border-color: #a0aec0;
    transform: translateY(-1px);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #a0aec0;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: #f7fafc;
    color: #4a5568;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  background: white;
  color: #2d3748;
  transition: all 0.2s ease;

  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  &:hover {
    border-color: #a0aec0;
  }

  &:disabled {
    background: #f7fafc;
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

export const AddButton = styled.button`
  padding: 14px 20px;
  background: #3182ce;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2c5aa0;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #a0aec0;
    cursor: not-allowed;
    transform: none;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  margin-bottom: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e0;
    transform: translateX(2px);
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #3182ce;
  cursor: pointer;
`;

export const TodoText = styled.span<{ checked: boolean }>`
  flex: 1;
  font-size: 16px;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: ${({ checked }) => (checked ? "#a0aec0" : "#2d3748")};
  transition: all 0.2s ease;
`;

export const RemoveButton = styled.button`
  background: #fed7d7;
  border: 1px solid #feb2b2;
  color: #c53030;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #feb2b2;
    border-color: #fc8181;
    transform: scale(1.05);
  }

  &:disabled {
    background: #e2e8f0;
    border-color: #cbd5e0;
    color: #a0aec0;
    cursor: not-allowed;
    transform: none;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #718096;
  font-size: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

export const DateSelector = styled.input`
  margin-bottom: 16px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  background: white;
  color: #2d3748;
`;
