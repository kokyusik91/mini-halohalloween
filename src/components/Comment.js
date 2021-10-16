import React from 'react';
import { Grid, Button, Text } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const Comment = (props) => {
  const dispatch = useDispatch();
  const { replyNickname, replyComment, replyID } = props;
  const replyID_send = { replyID: replyID };
  const user_data = useSelector((state) => state.user.user);
  const is_user = user_data === undefined ? '' : user_data.userNickname;
  const replyNicKname =
    props.replyNickname !== undefined ? props.replyNickname : '';
  //현재 로그인한 유저닉네임 : user_data
  //댓글을 누가 달았는지 props로 받아오기
  console.log(user_data, '현재 로그인한 유저닉네임');

  //삭제버튼이 클릭되면 해당 댓글의 ID값을 미들웨어로 보내줌
  //user_data와 replyNickname이 같아야 삭제버튼이 사라짐
  const deleteClick = () => {
    if (is_user === replyNicKname) {
      dispatch(commentActions.deleteCommentFB(replyID_send));
    }
  };
  // 로그인
  return (
    <Grid is_flex flex justify='space-between' margin='10px 0 0 0'>
      {/* 미다 수정 */}
      <Text>{replyNickname}</Text>
      <Text>{replyComment}</Text>
      {is_user === replyNicKname ? (
        <Button _onClick={deleteClick} color='#ff4949' width='20%'>
          삭제
        </Button>
      ) : null}
    </Grid>
  );
};

export default Comment;
