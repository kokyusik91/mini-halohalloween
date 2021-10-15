import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Container, Image, Text } from "../elements";
import Post from "../components/Post";
import { main } from "../image";

const Main = (props) => {
  const dispatch = useDispatch();
  const best_list = useSelector((state) => state.post.best_list);
  // console.log('main best_list = ', best_list);
  React.useEffect(() => {
    console.log("main useEffect");
    dispatch(postActions.getPostBestFB());
  }, []);

  return (
    <>
      <Grid height="auto" bg="#000">
        <Image width="100%" src={main} />
      </Grid>
      <Container margin="40px auto 0">
        <Grid margin="0 0 40px 0">
          <Text size="26px">인기 포스팅</Text>
        </Grid>
        <Grid is_flex justify="flex-start">
          {best_list.map((item, idx) => {
            return <Post key={`best-${idx}`} el={item} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
