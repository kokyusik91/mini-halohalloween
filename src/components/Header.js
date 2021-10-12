import React from "react";
import { Grid, Container } from "../elements";

const Hedaer = (props) => {
  return (
    <Grid width="100%" padding="25px 0" bg="hsl(346deg 33% 33%)">
      <Container>
        <Grid is_flex>
          <h1>
            <a>halohalloween</a>
          </h1>
          <Grid is_flex flex margin="0 0 0 20px">
            <button>할로윈소개</button>
            <button>포스팅</button>
            <button>Contact us</button>
          </Grid>
          <Grid>
            <button>로그인</button>
            <button>로그아웃</button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Hedaer;
