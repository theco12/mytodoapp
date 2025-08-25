import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: #f8fafc;
  box-sizing: border-box;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 420px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e2e8f0;
  animation: ${slideIn} 0.8s ease-out;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #2d3748;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #3182ce;
    border-radius: 2px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.75rem;
  display: block;
  text-align: left;
  font-size: 0.95rem;
  transition: color 0.2s ease;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  box-sizing: border-box;
  transition: all 0.2s ease;
  color: #2d3748;

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
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #3182ce;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #2c5aa0;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LinkText = styled.p`
  text-align: center;
  font-size: 0.95rem;
  margin-top: 2rem;
  color: #4a5568;

  a {
    color: #3182ce;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: #3182ce;
      transition: width 0.2s ease;
    }

    &:hover {
      color: #2c5aa0;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #a0aec0;
  font-size: 0.9rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }

  span {
    padding: 0 1rem;
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: white;
  color: #4a5568;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    border-color: #3182ce;
    background-color: #f8fafc;
    transform: translateY(-1px);
  }
`;
