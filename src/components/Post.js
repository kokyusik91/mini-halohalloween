import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal2 from './Modal2';
import { Image, Text, Grid } from '../elements';

const Post = (props) => {
  const { el } = props;
  // console.log('post props ===', props);
  const [modal2, setModal2] = useState(false);
  // 상세페이지 모달on/off 함수
  const modalOnOff2 = () => {
    if (!modal2) {
      setModal2(true);
    } else {
      setModal2(false);
    }
  };

  return (
    <>
      <PostCard onClick={modalOnOff2}>
        <Image
          height='200px'
          src={
            !props.el.postingImgUrl
              ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qRSiz3_RF1OMIdMiZvtWrycSyblXRgyl1Q&usqp=CAU'
              : props.el.postingImgUrl
          }
        />
        <Grid padding='8px' is_flex justify='space-between'>
          <Text size=' 12px' bold>
            {props.el.postingAuthor}
          </Text>
          <Text size=' 12px'>👀 {props.el.postingSeen}</Text>
        </Grid>
        <Grid padding='8px'>
          <Text size='18px'>{props.el.postingTitle}</Text>
        </Grid>
        <Grid padding='8px'>
          <Text>{props.el.postingComment}</Text>
        </Grid>
        <Grid padding='8px'></Grid>
      </PostCard>
      {modal2 === true ? <Modal2 el={el} _setModal={setModal2} /> : ''}
    </>
  );
};

const PostCard = styled.div`
  width: 24%;
  height: 400px;
  margin-right: 1%;
  margin-bottom: 10px;
  margin-right: 1%;
  background-color: #fafafa;
  transition: all ease 1s;
  cursor: pointer;
  border: 0.2px solid #dbdbdb;
  &:hover {
    transform: scale(1.05);
  }
  @media ${({ theme }) => theme.tablet} {
    width: 49%;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export default Post;
