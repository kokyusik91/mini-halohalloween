import React from "react";
import { Grid, Input, Button, Container } from "../elements";

const Comment = () => {
  return (
    <Container padding="10px">
      <Grid is_flex flex>
        <Input />
        <Button width="20%">등록</Button>
      </Grid>
    </Container>
  );
};

export default Comment;
