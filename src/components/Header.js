import React from "react";
import { Grid, Container } from "../elements";

const Hedaer = (props) => {
  return (
    <Grid width="100%" padding="25px 0" bg="hsl(346deg 33% 33%)">
      <Container>
        <Grid is_flex justify="space-between" bg="none">
          <h1>
            <a>halohalloween</a>
          </h1>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Hedaer;
