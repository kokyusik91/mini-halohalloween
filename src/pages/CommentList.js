import React, { useState } from "react";
import { Grid, Button, Input } from "../elements";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as commentActions } from "../redux/modules/comment";

//1. login 했을때만 commentcard가 보임 => useState 이용 is_login  삼항연산자넣기
//2. input값을 useEffect를 이용해서, inputdata가 변할때만  실행시켜줌

const CommentList = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.comment_list);
  console.log("comment_list", comment_list);

  React.useEffect(() => {
    if (comment_list.length === 0) {
      //디스패치로 액션함수 불러오기
      // dispatch(commentActions.getPostFB());
    }
  }, []);

  // const inputData = [{ comment: "안녕하세요" }, { comment: "반가워요" }];

  const onClick = () => {
    //inputData값을 ui에 나타내줌
    // let inputCopy = [...inputData];
    // inputData.unshift(inputCopy);
  };

  return (
    <React.Fragment>
      {/* 댓글입력 영역-inputData */}
      <Grid is_flex flex>
        {/* input값에 onChange로 상태값 변경해줌 */}
        <Input
          _onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <Button width="auto" _onClick={onClick}>
          등록
        </Button>
      </Grid>

      {/* 댓글 컨텐츠 보여주는 영역 */}
      {comment_list.map((el, i) => {
        // console.log(el, i);
        return <Comment key={i} {...el} />;
      })}
    </React.Fragment>
  );
};

// console.log(props._onChange);

export default CommentList;
