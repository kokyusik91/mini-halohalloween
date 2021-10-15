import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Label,
  Input,
  Textarea,
  Upload,
  Button,
  Image,
} from '../elements/index';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const Modal = (props) => {
  const dispatch = useDispatch();
  let image_url = useSelector((state) => state.image.image_url);
  useEffect(() => {});
  // console.log('모달로 들어온 이미지 url', image_url);
  // 인풋창 2개 state 1개로 관리하는 방법
  const modaloff = () => {
    props._setModal(false);
  };
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
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
  const postingDate = moment().format('YYYY-MM-DD');

  // console.log('마지막으로 올라갈 데이터', post_data);
  // 미들웨어로 유저정보 보냄 post_data = {} 객체형식
  const submitPost = () => {
    // 제목, 내용 유효성 검토
    if (!inputs.title || !inputs.content) {
      return alert('빈칸을 입력해 주세요!');
    }
    const post_data = {
      postingTitle: inputs.title,
      postingComment: inputs.content,
      postingDate: postingDate,
      postingImgUrl: image_url,
      postingDel: 1,
    };
    dispatch(postActions.addPostFB(post_data));
    // 질문 : dispatch한번 더 쓰는게 좋은지, 아니면 Modal on/off 전역상태로 리렌더링 하는게 나을지??
    dispatch(postActions.setPostFB());
    modaloff();
  };

  // 글쓰기 모달
  return (
    <>
      <ModalParent>
        <Grid width='30vw' padding='40px 50px' bg='#f1f3f5'>
          글을 써주세요!
          <Grid margin='20px 0 0 0'>
            <Image src={image_url} />
          </Grid>
          <Grid margin='20px 0 0 0'>
            <Label margin=''>제목</Label>
            <Input
              name='title'
              type='text'
              placeholder='제목을 입력해주세요!'
              _onChange={onChange}
              value={title}
            />
          </Grid>
          <Grid margin='20px 0 0 0'>
            <Label margin=''>게시글</Label>
            <Textarea
              name='content'
              placeholder='게시글을 작성해주세요!'
              _onChange={onChange}
              value={content}
            />
          </Grid>
          <Grid margin='20px 0 0 0' is_flex justify='flex-end'>
            {/* 이미지 업로드 */}
            <Upload />
          </Grid>
          <Grid>
            <Button margin='10px 0 0 0' type='blue' _onClick={submitPost}>
              글올리기
            </Button>
          </Grid>
          <Cancelbtn onClick={modaloff}>닫기</Cancelbtn>
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

const Cancelbtn = styled.button`
  position: absolute;
  top: -65px;
  right: 5px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  /* transform: translate(-50%, -50%); */
  background-color: transparent;
  color: #fff;
  transition: all ease 0.3s;
  &:hover {
    color: #ff4949;
  }
`;

export default Modal;
