import React from "react";
import { history } from "../redux/configureStore";
import { Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import { Grid, Container, Button } from "../elements";

const Hedaer = (props) => {
  const pathname = history.location.pathname;
  if (pathname === "/login" || pathname === "/signup") {
    return;
  }
  console.log("header = history ", history);
  const onLogin = () => {
    console.log("click");
    history.push("/login");
  };
  return (
    <Grid width="100%" padding="25px 0" bg="hsl(346deg 33% 33%)">
      <Container>
        <Grid is_flex>
          <Button fontSize="26px" _onClick={() => history.push("/")}>
            halohalloween
          </Button>
          <Grid is_flex flex margin="0 0 0 20px">
            <Button padding="0px 20px">할로윈소개</Button>
            <Button padding="0px 20px">포스팅</Button>
            <Button padding="0px 20px">Contact us</Button>
          </Grid>
          <Grid>
            <Button padding="0px 20px" _onClick={onLogin}>
              로그인
            </Button>
            <Button padding="0px 20px">회원가입</Button>
            <Button padding="0 0 0 20px">로그아웃</Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Hedaer;
