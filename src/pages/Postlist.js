import React, { useState } from "react";
// import styled from 'styled-components';
import { Grid, Container, Button } from "../elements";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const Postlist = (props) => {
  const post_data = useSelector((state) => state.post.post_list);

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
      {modal1 === true ? <Modal _setModal={setModal1} /> : ""}
      <Container margin="40px auto 0">
        <Grid>
          <h1>포스팅 키워드</h1>
        </Grid>

        {/* modal on / off */}
        <Grid is_flex justify="end" margin="40px 0">
          <Button type="blue" width="60px" _onClick={modalOnOff}>
            글쓰기
          </Button>
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
      </Container>
    </>
  );
};

export default Postlist;
