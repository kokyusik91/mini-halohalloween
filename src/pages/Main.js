import React from "react";
import { Grid, Container, Image } from "../elements";
import {
  hallween01,
  hallween02,
  hallween03,
  hallween04,
  // emoji01,
} from "../image";
const Main = (props) => {
  const data = [
    { id: 1, content: "1", title: "1", image: hallween01 },
    { id: 2, content: "2", title: "2", image: hallween02 },
    { id: 3, content: "3", title: "3", image: hallween03 },
    { id: 4, content: "4", title: "4", image: hallween04 },
  ];

  return (
    <>
      <Grid height="450px" bg="#000">
        <Container>
          <p
            style={{ color: "#fff", lineHeight: "450px", textAlign: "center" }}
          >
            동영상 혹은 이미지
          </p>
        </Container>
      </Grid>
      <Container margin="40px auto 0">
        <Grid margin="0 0 40px 0">
          <h1>포스팅 키워드</h1>
          {/* <Image src={emoji01} width="80px" /> */}
        </Grid>
        <Grid is_flex justify="space-between">
          {data.map((item) => {
            return (
              <Grid type="card" key={item.id}>
                <Image src={item.image} height="250px" />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
