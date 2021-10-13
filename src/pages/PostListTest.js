import React, { useState } from "react";
// import styled from 'styled-components';
import { Grid, Container, Button } from "../elements";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const Postlist = (props) => {
  const post_data = useSelector((state) => state.post.post_list);

  // 모달 State
  const [modal1, setModal1] = useState({ visible: false, id: 0 });
  // 모달on/off 함수
  const modalOnOff = (id) => {
    if (!modal1.visible) {
      setModal1({ ...modal1, visible: true, id });
    } else {
      setModal1({ ...modal1, visible: false, id });
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
      {modal1.visible === true ? (
        <Modal _setModal={setModal1} id={modal1.id} />
      ) : (
        ""
      )}
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
              <Grid
                type="card"
                key={item.id}
                _onClick={() => modalOnOff(item.id)}
              >
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
