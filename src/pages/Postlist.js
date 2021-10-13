import React, { useState } from "react";
// import styled from 'styled-components';
import { Grid, Container, Button } from "../elements";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const Postlist = (props) => {
  const post_data = useSelector((state) => state.post.post_list);
  console.log("useSelector", post_data);
  // 모달 State
  const [modal1, setModal1] = useState(false);
  // 모달on/off 함수
  const modalOnOff = () => {
    if (!modal1) {
      setModal1(true);
    } else {
      setModal1(false);
    }
  };
  const data = [
    { id: 1, content: "내용1", title: "제목1" },
    { id: 2, content: "내용2", title: "제목2" },
    { id: 3, content: "내용3", title: "제목3" },
    { id: 4, content: "내용4", title: "제목4" },
  ];
  return (
    <>
      <Container margin="40px auto 0">
        <Grid margin="0 0 40px 0">
          <h1>포스팅 키워드</h1>
        </Grid>
        <Grid is_flex justify="space-between">
          {data.map((item) => {
            return (
              <Grid type="card" key={item.id}>
                {item.content}
              </Grid>
            );
          })}
        </Grid>
        {/* <Grid is_flex justify="space-between">
          <Grid type="card">1</Grid>
          <Grid type="card">2</Grid>
          <Grid type="card">3</Grid>
          <Grid type="card">4</Grid>
        </Grid>
        <Grid is_flex justify="space-between" margin="20px 0 0 0">
          <Grid type="card">1</Grid>
          <Grid type="card">2</Grid>
          <Grid type="card">3</Grid>
          <Grid type="card">4</Grid>
        </Grid> */}
      </Container>

      {/* modal on / off */}
      <button onClick={modalOnOff}>글쓰기</button>
      {modal1 === true ? <Modal _setModal={setModal1} /> : ""}
    </>
  );
};

export default Postlist;
