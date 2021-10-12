import React, { useState } from 'react';
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

const Modal = (props) => {
  // 부모 컴포넌트의 State를 건드리니 Context-api로 개선하기
  const modaloff = () => {
    props._setModal(false);
  };
  // 인풋창 2개 한번에 관리
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  // 비구조화 할당으로 값 추출
  const { title, content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <ModalParent>
        <Grid width='30vw' padding='40px 50px' bg='#f1f3f5'>
          글을 써주세요!
          <Grid margin='20px 0 0 0'>
            <Image
              width='50%'
              src='https://www.statehumanities.org/wp-content/uploads/2015/08/400x300-300x225.gif'
            />
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
            <Upload />
          </Grid>
          <Grid>
            <Button margin='10px 0 0 0'>글올리기</Button>
            <Button margin='10px 0 0 0' _onClick={modaloff}>
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
