import React, { useState } from "react";
import styled from "styled-components";
import {
  Grid,
  Label,
  Input,
  Textarea,
  Upload,
  Button,
  Image,
} from "../elements/index";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Modal = (props) => {
  // Modal on/off 부모 컴포넌트의 State를 건드리니 Context-api로 개선하기

  const modaloff = () => {
    props._setModal(false);
  };

  const dispatch = useDispatch();
  // 인풋창 2개 state 1개로 관리하는 방법
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  // 비구조화 할당으로 값 추출
  const { title, content } = inputs;

  // onchange 함수에서 e.target에 있는 value,name을 가져온다.
  // ...inputs으로 기존 객체를 복사하고, key가 name인 value값을 대치해준다.
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // moment사용하여 포스팅한 날짜정보
  const postingDate = moment().format("YYYY-MM-DD");

  // 미들웨어로 유저정보 보냄 post_data = {} 객체형식
  const submitPost = () => {
    const post_data = {
      postingTitle: inputs.title,
      postingComment: inputs.content,
      postingDate: postingDate,
      postingDel: 1,
    };
    dispatch(postActions.addPostFB(post_data));
  };

  return (
    <>
      <ModalParent>
        <Grid width="30vw" padding="40px 50px" bg="#f1f3f5">
          글을 써주세요!
          <Grid margin="20px 0 0 0">
            {/* <Image
              width='50%'
              src='https://www.statehumanities.org/wp-content/uploads/2015/08/400x300-300x225.gif'
            /> */}
          </Grid>
          <Grid margin="20px 0 0 0">
            <Label margin="">제목</Label>
            <Input
              name="title"
              type="text"
              placeholder="제목을 입력해주세요!"
              _onChange={onChange}
              value={title}
            />
          </Grid>
          <Grid margin="20px 0 0 0">
            <Label margin="">게시글</Label>
            <Textarea
              name="content"
              placeholder="게시글을 작성해주세요!"
              _onChange={onChange}
              value={content}
            />
          </Grid>
          <Grid margin="20px 0 0 0" is_flex justify="flex-end">
            <Upload />
          </Grid>
          <Grid>
            <Button margin="10px 0 0 0" _onClick={submitPost}>
              글올리기
            </Button>
            <Button margin="10px 0 0 0" _onClick={modaloff}>
              취소
            </Button>
          </Grid>
        </Grid>
      </ModalParent>
    </>
  );
};

const ModalParent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export default Modal;

// apis
//       .getPost()
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

// axios사용하여 POST요청
// axios({
//   url: '/post/posting',
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json;charset=UTF-8',
//     Authorization: `Bearer ${sessionStorage.getItem('token')}`,
//     accept: 'application/json',
//   },
//   data: {
//     postingTitle: post_info.postingTitle,
//     postingComment: post_info.postingComment,
//     postingDate: post_info.postingDate,
//   },
// })
//   .then((response) => {
//     console.log(response);
//     alert('포스팅 성공!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// try {
//   let res = await apis.create('/post/posting', post_info, { headers: {
//     'content-type': 'application/json;charset=UTF-8',
//     Authorization: `Bearer ${sessionStorage.getItem('token')}`,
//     accept: 'application/json',
//   }} );
//   console.log('성공?', res);
// } catch (e) {
//   alert(e);
//   console.log('error === ', e);
// }
