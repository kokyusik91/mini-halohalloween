import React from "react";
import { Grid, Button, Text } from "../elements";

const Comment = (props) => {
  console.log(props);
  return (
    <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
      <Text>유저네임</Text>
      <Text>{props.inputData}</Text>
      <Button width="20%">댓글삭제</Button>
    </Grid>
  );
};

export default Comment;
