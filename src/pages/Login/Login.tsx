import React from "react";
import { Container, Card, Title, Form, Label, Input, Button, LinkText } from "./Login.style";

const Login = () => {
  return (
    <Container>
      <Card>
        <Title>My Todo List Login</Title>
        <Form>
          <div>
            <Label htmlFor="accountId">아이디</Label>
            <Input
              id="accountId"
              name="accountId"
              type="text"
              placeholder="아이디를 입력해 주세요"
            />
          </div>
          <div>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
            />
          </div>
          <Button type="submit">로그인</Button>
        </Form>
        <LinkText>
          계정이 없으신가요? <a href="/register">회원가입</a>
        </LinkText>
      </Card>
    </Container>
  );
};

export default Login;
