import React, { useState } from "react";
import {
  Container,
  Card,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  LinkText,
  Divider,
  SocialButton,
} from "./Login.style";

const Login = () => {
  const [formData, setFormData] = useState({
    accountId: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log("Login attempt:", formData);
  };

  return (
    <Container>
      <Card>
        <Title>My Todo List</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="accountId">아이디</Label>
            <Input
              id="accountId"
              name="accountId"
              type="text"
              placeholder="아이디를 입력해 주세요"
              value={formData.accountId}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <Button type="submit">로그인</Button>
        </Form>

        <Divider>
          <span>또는</span>
        </Divider>

        <SocialButton type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google로 로그인
        </SocialButton>

        <LinkText>
          계정이 없으신가요? <a href="/register">회원가입</a>
        </LinkText>
      </Card>
    </Container>
  );
};

export default Login;
