import React, { useState } from 'react';
import { Grid, Button, Input, Container } from '../elements';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

//1. login 했을때만 commentcard가 보임 => useState 이용 is_login  삼항연산자넣기
//2. input값을 useEffect를 이용해서, inputdata가 변할때만  실행시켜줌

const CommentList = (props) => {
  console.log('CommentList의 PostID', props.postID);
  // console.log('해당하는 게시물ID를 commentList에서 받아옴 props', props.postID);
  // console.log('commentList.js에서 가지고 있는 postID', props.postID);
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  //useSelector는 현재 리덕스의 state값을 가져온다
  const comment_list = useSelector((state) => state.comment.comment_list);
  // console.log('현재 리덕스 state에 저장되있는 comment_list', comment_list);
  const user_data = useSelector((state) => state.user.user);
  // console.log('현재 로그인 중인 유저 정보', user_data);
  const userNickname = user_data !== undefined ? user_data.userNickname : '';
  // const userNickname = user_data.userNickname;
  // console.log("userNickname", userNickname);
  // const exitedToken
  // console.log('커멘트페이지', comment_list);

  const comment = {
    postID: props.postID.postID,
    replyNickname: userNickname,
    replyComment: input,
  };

  React.useEffect(() => {
    if (comment_list.length === 0) {
      //디스패치로 액션함수 불러오기
      dispatch(commentActions.setCommentFB(props.postID));
    }
  }, [props.postID]);
  //comment 등록버튼 누르면 일어나는 이벤트
  const onClick = () => {
    //dispatch를 불러서 comment값을 리덕스로 넘겨줍니다
    // console.log(comment);
    dispatch(commentActions.addCommentFB(comment));
  };

  //comment 삭제버튼 누르면 일어나는 이벤트
  // console.log(
  //   '리덕스에서 넘어온 전체 State 게시물의 postID와 현재 열려있는 postID를 걸러서 같은 댓글만 뿌려준다.',
  //   filteredArray
  // );
  return (
    <Container>
      {/* 댓글입력 영역-inputData */}
      <Grid is_flex>
        {/* input값에 onChange로 상태값 변경해줌 */}
        <Input
          flex='3'
          _onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <Button width='auto' _onClick={onClick}>
          등록
        </Button>
      </Grid>

      {/* 댓글 컨텐츠 보여주는 영역 */}
      {comment_list.map((el, i) => {
        // console.log(el, i);
        return <Comment key={i} {...el} comment={comment} />;
      })}
    </Container>
  );
};

// console.log(props._onChange);

export default CommentList;
