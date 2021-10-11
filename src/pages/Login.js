import React from "react";
import styled from "styled-components";
import { Grid, Label } from "../elements";
const Login = (props) => {
  return (
    <Grid
      width="30vw"
      height="60vh"
      margin="20vh auto"
      padding="40px 50px"
      bg="#f1f3f5"
    >
      <h1>로그인</h1>
      <Grid margin="20px 0 0 0">
        <Label>이메일</Label>
        <Input placeholder="이메일 주소를 입력해주세요." />
      </Grid>
      <Grid margin="10px 0 0 0">
        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </Grid>
      <Grid margin="20px 0 0 0">
        <Button>로그인</Button>
      </Grid>
      <Grid margin="20px 0 0 0">
        <Button
          style={{ backgroundColor: "#fff", color: "hsl(209deg 30% 20%)" }}
        >
          회원가입
        </Button>
      </Grid>
    </Grid>
  );
};
const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 3px;
  padding: 8px;
`;
const Button = styled.button`
  width: 100%;
  padding: 13px 0;
  color: #fff;
  background-color: hsl(209deg 30% 20%);
  border: 1px solid hsl(209deg 30% 20%);
`;

export default Login;
