import React, { useState, useEffect } from "react";
import { Grid, Container, Button } from "../elements";
import Modal from "../components/Modal";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Postlist = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.post_list);
  const exitedToken = sessionStorage.getItem("token");

  // 모달 on/off State
  const [modal1, setModal1] = useState(false);

  // 글쓰기 모달on/off 함수
  const modalOnOff = () => {
    if (!modal1) {
      setModal1(true);
    } else {
      setModal1(false);
    }
  };

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.setPostFB());
    }
  }, []);

  return (
    <>
      <Container margin="40px auto 0">
        <Grid margin="0 0 40px 0" is_flex justify="space-between">
          <h1>다들 할로윈 어케 보내시는지?....</h1>
          {exitedToken ? (
            <Button type="blue" width="10%" _onClick={modalOnOff}>
              글쓰기
            </Button>
          ) : null}
        </Grid>
        <Grid is_flex justify="flex-start">
          {post_list.map((el) => {
            return <Post key={el.id} el={el} />;
          })}
        </Grid>
      </Container>
      {/* modal on / off */}
      {modal1 === true ? <Modal _setModal={setModal1} /> : ""}
    </>
  );
};

export default Postlist;
