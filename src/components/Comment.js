import React from 'react';
import { Grid, Button, Text } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const Comment = (props) => {
  const dispatch = useDispatch();
  const { replyNickname, replyComment, replyID } = props;
  // console.log(replyID, "댓글ID값");
  const replyID_send = { replyID: replyID };
  const user_data = useSelector((state) => state.user.user.userNickname);
  const replyNicKname = props.replyNickname;
  //현재 로그인한 유저닉네임 : user_data
  //댓글을 누가 달았는지 props로 받아오기
  console.log(user_data, "현재 로그인한 유저닉네임");

  //삭제버튼이 클릭되면 해당 댓글의 ID값을 미들웨어로 보내줌
  //user_data와 replyNickname이 같아야 삭제버튼이 사라짐
  const deleteClick = () => {
    if (user_data === replyNicKname) {
      dispatch(commentActions.deleteCommentFB(replyID_send));
    }
  };

  return (
<<<<<<< HEAD
    <Grid is_flex flex justify='space-between' margin='10px 0 0 0'>
=======
    <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
>>>>>>> e4f6e4eafb8d4e64016241e4577c64ce485bac52
      {/* 미다 수정 */}
      <Text>{replyNickname}</Text>
      <Text>{replyComment}</Text>
      {/* <Text>{props.comment.replyNickname}</Text>
      <Text>{props.replyComment}</Text> */}
<<<<<<< HEAD
      <Button _onClick={deleteClick} width='20%'>
        댓글삭제
      </Button>
=======
      {user_data === replyNicKname ? (
        <Button _onClick={deleteClick} width="20%">
          댓글삭제
        </Button>
      ) : null}
>>>>>>> e4f6e4eafb8d4e64016241e4577c64ce485bac52
    </Grid>
  );
};

export default Comment;
