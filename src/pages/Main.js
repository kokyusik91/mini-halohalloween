import React from "react";
import { Grid, Container } from "../elements";

const Main = (props) => {
  const data = [
    { id: 1, content: "1", title: "1" },
    { id: 2, content: "2", title: "2" },
    { id: 3, content: "3", title: "3" },
    { id: 4, content: "4", title: "4" },
  ];
  React.useEffect(() => {
    console.log("main");
  }, []);
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

export default Main;
