import React from "react";
import { Grid, Input, Button, Container, Text } from "../elements";

const CommentCard = () => {
  return (
    <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
      <Text id="">유저네임</Text>
      <Text id="">댓글내용</Text>
      <Button width="20%">댓글삭제</Button>
    </Grid>
  );
};

export default CommentCard;
