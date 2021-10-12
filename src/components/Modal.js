import React from 'react';
import styled from 'styled-components';
import { Grid, Label, Input, Textarea, Upload } from '../elements/index';

const Modal = (props) => {
  return (
    <>
      <ModalParent>
        <Grid
          width='30vw'
          height='60vh'
          margin='20vh auto'
          padding='40px 50px'
          bg='#f1f3f5'
        >
          글을 써주세요!
          <Grid margin='20px 0 0 0'>
            <Input type='file' placeholder='업로드' />
          </Grid>
          <Grid margin='20px 0 0 0'>
            <Label margin=''>제목</Label>
            <Input type='text' placeholder='제목을 입력해주세요!' />
          </Grid>
          <Grid margin='20px 0 0 0'>
            <Label margin=''>게시글</Label>
            <Textarea placeholder='게시글을 작성해주세요!' />
          </Grid>
          <Grid margin='20px 0 0 0'>
            <button>글올리기</button>
            <button>취소</button>
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
  z-index: 999;
`;

export default Modal;
