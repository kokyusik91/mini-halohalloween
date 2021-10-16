import React from "react";
import { history } from "../redux/configureStore";
import { Button, Container, Grid } from "../elements";

const Footer = (props) => {
  return (
    <Grid margin="50px 0 0 0" padding="30px 0" bg="hsl(209deg 30% 20%)">
      <Container>
        <Grid is_flex justify="end">
          <Button color="#fff" _onClick={() => history.push("/contactus")}>
            halohalloween 팀원 정보
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
