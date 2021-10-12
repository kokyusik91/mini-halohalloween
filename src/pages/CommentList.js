import React, { useState } from "react";
import { Grid, Button, Input } from "../elements";
import Comment from "../components/Comment";
//import comment from "../redux/modules/comment";

//1. login 했을때만 commentcard가 보임 => useState 이용 is_login  삼항연산자넣기
//2. input값을 useEffect를 이용해서, inputdata가 변할때만  실행시켜줌

const CommentList = () => {
  //const [login, loginSet] = useState(true);
  const [inputData, inputDataSet] = useState("");

  return (
    <React.Fragment>
      {/* 댓글입력 영역-inputData */}
      <Grid is_flex flex>
        <Input
          _onChange={(e) => {
            inputDataSet(e.target.value);
          }}
        />
        <Button width="20%">등록</Button>
      </Grid>

      {/* 댓글 컨텐츠 보여주는 영역 */}
      <Comment />
    </React.Fragment>
  );
};

export default CommentList;
