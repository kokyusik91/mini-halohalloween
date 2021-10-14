import React from 'react';
import { Grid, Button, Text } from '../elements';

const Comment = (props) => {
  console.log('제일 자식 코멘트', props.comment);

  // const onDelete =

  return (
    <Grid is_flex flex justify='space-between' margin='10px 0 0 0'>
      <Text>{props.comment.replyNickname}</Text>
      <Text>{props.replyComment}</Text>
      <Button width='20%'>댓글삭제</Button>
    </Grid>
  );
};

export default Comment;
