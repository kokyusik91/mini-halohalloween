import React from "react";
import Comment from "../components/Comment";
import { Grid, Button, Text } from "../elements";

const comment = 

const CommentList = () => {
  return (
    <React.Fragment>
      {comment.map((c, i) => {
        return <Comment key={c.id} />;
      })}

      <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
        <Text id="">유저네임</Text>
        <Text id="">댓글내용</Text>
        <Button width="20%">댓글삭제</Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;
