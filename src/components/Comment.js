import React from "react";
import { Grid, Button, Text } from "../elements";

const Comment = (props) => {
  return (
    <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
      <Text id="">유저네임</Text>
      <Text id="">{props.inputData}</Text>
      <Button width="20%">댓글삭제</Button>
    </Grid>
  );
};

export default Comment;
