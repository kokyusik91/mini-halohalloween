import React from "react";
import { Grid, Container, Button } from "../elements";
import Spinner from "../shared/Spinner";
import { apis } from "../shared/axios";

const Main = (props) => {

  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await apis.get();
        console.log("res ============ ", res);
      } catch (e) {
        console.log(e);
      }
    };
    load();
  }, []);

  return (
    <>
      <Button is_white>회원가입</Button>
      {/* <Spinner /> */}
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
          <Grid width="24%" height="250px" bg="#eee">
            1
          </Grid>
          <Grid width="24%" height="250px" bg="#eee">
            2
          </Grid>
          <Grid width="24%" height="250px" bg="#eee">
            3
          </Grid>
          <Grid width="24%" height="250px" bg="#eee">
            4
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
