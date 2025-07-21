import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #222;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fafafa;
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #43a047;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1.2rem;

  a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
