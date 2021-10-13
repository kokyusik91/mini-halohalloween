import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Input, Textarea, Button, Image, Text } from '../elements/index';

const Modal2 = (props) => {
  // 상세페이지 모달
  const modaloff = () => {
    props._setModal(false);
  };

  return (
    <>
      <ModalParent>
        <Grid width='30vw' padding='10px 30px' bg='#f1f3f5'>
          <Grid margin='10px 0 0 0' is_flex justify='flex-end'>
            <Button margin='0 5px 0 0'>수정</Button>
            <Button margin='0 5px 0 0'>삭제</Button>
          </Grid>
          <Grid is_flex justify='flex-end'>
            <Image src='https://w.namu.la/s/45f0a9e507fc904b7accb3586ff709220b6242dfda220bd7ae85a39b57b22a760a4fa4cb0c2fbf16f37c9d229d0e93a1aac0d9c3dbd927c039698d9bdd9ab9a659f253ec19e2d0d33ddb115858b3222ea5a8a732082176563cc61e10ea9259b9' />
          </Grid>
          <Grid margin='10px 0 0 0' is_flex justify='space-between'>
            <Text>{props.el.postingAuthor}</Text>
            <Text>{props.el.postingDate}</Text>
          </Grid>
          <Grid margin='10px 0 0 0'>
            <Input type='text' value={props.el.postingTitle} />
          </Grid>
          <Grid margin='10px 0 0 0'>
            <Textarea value={props.el.postingComment} />
          </Grid>
          <Grid margin='10px 0 0 0' is_flex>
            <Input type='text' flex />
            <Button margin='0 0 0 5px'>수정</Button>
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

export default Modal2;
