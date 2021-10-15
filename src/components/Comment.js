import React from "react";
import { Grid, Button, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const Comment = (props) => {
  const dispatch = useDispatch();
  // const replyID = props.replyID;
  const { replyNickname, replyComment } = props;


  const replyID = useSelector((state) => state.comment.comment_list[0].postID);
  const [deleteRelplyID, setDeleteReplyID] = useState(state.comment.comment_list[0].postID);
  console.log(replyID);

//삭제버튼이 클릭되면 해당 댓글의 ID값을 미들웨어로 보내줌
  const deleteClick = (replyID) => {
    dispatch(commentActions.deleteCommentFB(replyID));
  };

  console.log(replyID, "댓글");
  return (
    <Grid is_flex flex justify="space-between" margin="10px 0 0 0">
      {/* 미다 수정 */}
      <Text>{replyNickname}</Text>
      <Text>{replyComment}</Text>
      {/* <Text>{props.comment.replyNickname}</Text>
      <Text>{props.replyComment}</Text> */}
      <Button _onClick={deleteClick} width="20%">
        댓글삭제
      </Button>
    </Grid>
  );
};

export default Comment;
