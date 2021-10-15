import React from "react";
import { Grid, Button, Text } from "../elements";

const Comment = (props) => {
  const { replyNickname, replyComment } = props;
  console.log(props.replyID, "Comment컴포넌트에 뭐가 들어오지?");

  return (
    <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
      {/* 미다 수정 */}
      <Text>{replyNickname}</Text>
      <Text>{replyComment}</Text>
      {/* <Text>{props.comment.replyNickname}</Text>
      <Text>{props.replyComment}</Text> */}
      <Button width="20%">댓글삭제</Button>
    </Grid>
  );
};

export default Comment;
