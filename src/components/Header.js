import React from "react";
import { history } from "../redux/configureStore";
import { Grid, Container, Button } from "../elements";

const Hedaer = (props) => {
  const logout = () => {
    sessionStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
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
            <Button padding="0px 20px" _onClick={() => history.push("/login")}>
              로그인
            </Button>
            <Button padding="0px 20px" _onClick={() => history.push("/signup")}>
              회원가입
            </Button>
            <Button padding="0 0 0 20px" _onClick={logout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Hedaer;
