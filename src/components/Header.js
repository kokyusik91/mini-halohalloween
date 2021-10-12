import React from "react";
import { Grid, Container, Button } from "../elements";

const Hedaer = (props) => {
  return (
    <Grid width="100%" padding="25px 0" bg="hsl(346deg 33% 33%)">
      <Container>
        <Grid is_flex>
          <h1>
            <a>halohalloween</a>
          </h1>
          <Grid is_flex flex margin="0 0 0 20px">
            <Button>할로윈소개</Button>
            <Button>포스팅</Button>
            <Button>Contact us</Button>
          </Grid>
          <Grid>
            <Button>로그인</Button>
            <Button>로그아웃</Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Hedaer;
