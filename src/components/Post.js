import React, { useState } from "react";
import styled from "styled-components";
import Modal2 from "./Modal2";
import { Image, Text, Grid } from "../elements";

const Post = (props) => {
  const { el } = props;

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
          width="100%"
          src="https://w.namu.la/s/45f0a9e507fc904b7accb3586ff709220b6242dfda220bd7ae85a39b57b22a760a4fa4cb0c2fbf16f37c9d229d0e93a1aac0d9c3dbd927c039698d9bdd9ab9a659f253ec19e2d0d33ddb115858b3222ea5a8a732082176563cc61e10ea9259b9"
        />
        <Grid padding="8px">
          <Text>제목 : {props.el.postingTitle}</Text>
        </Grid>
        <Grid padding="8px">
          <Text>내용 : {props.el.postingComment}</Text>
        </Grid>
        <Grid padding="8px">
          <Text>닉네임 : {props.el.postingAuthor}</Text>
        </Grid>
      </PostCard>
      {modal2 === true ? <Modal2 el={el} _setModal={setModal2} /> : ""}
    </>
  );
};

const PostCard = styled.div`
  width: 24%;
  min-height: 300px;
  margin-right: 1%;
  margin-bottom: 10px;
  margin-right: 1%;
  background-color: #f1f3f5;
  transition: all ease 1s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:last-child {
    margin: 0;
  }
  &:last-child {
    margin-right: 0;
    border: 2px solid red;
  }
  border: 0.3px solid #243443;
`;

export default Post;
