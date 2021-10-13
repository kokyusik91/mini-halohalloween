import React from "react";
import { Container, Grid, Text } from "../elements";

const Footer = (props) => {
  return (
    <Grid margin="50px 0 0 0" padding="30px 0" bg="hsl(209deg 30% 20%)">
      <Container>
        <Grid is_flex justify="end">
          <Text color="#fff">팀원정보</Text>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
