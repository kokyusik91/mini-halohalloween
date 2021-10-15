import React, { useState } from "react";
import { Grid, Button, Input, Container } from "../elements";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentListTest = (props) => {
  const postID = props.postID;
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  //로그인 정보 불러오기
  const is_login = useSelector((state) => state.user.is_login);

  //전체 댓글 정보 불러오기
  const comment_list = useSelector((state) => state.comment.comment_list);
  const user_data = useSelector((state) => state.user.user);
  const userNickname = user_data !== undefined ? user_data.userNickname : "";

  const comment = {
    postID: postID.postID,
    replyNickname: userNickname,
    replyComment: input,
  };

  //comment 등록버튼 누르면 일어나는 이벤트
  const onClick = () => {
    dispatch(commentActions.addCommentFB(comment));
    setInput("");
    dispatch(commentActions.setCommentFB(postID));
  };

  React.useEffect(() => {
    dispatch(commentActions.setCommentFB(postID));
  }, []);

  return (
    <Container>
      <Grid is_flex>
        {is_login ? (
          <>
            <Input
              flex="3"
              _onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <Button width="auto" _onClick={onClick}>
              등록
            </Button>
          </>
        ) : null}
      </Grid>

      {comment_list.map((el, i) => {
        return <Comment key={i} {...el} />;
      })}
    </Container>
  );
};

export default CommentListTest;
