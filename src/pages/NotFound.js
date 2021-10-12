import React from "react";
import { Container, Grid, Image } from "../elements";
import halohalloween from "../halohalloween.svg";
const NotFound = (props) => {
  return (
    <Grid>
      <Container height="72vh">
        <Image width="150px" src={halohalloween} />
      </Container>
    </Grid>
  );
};

export default NotFound;
