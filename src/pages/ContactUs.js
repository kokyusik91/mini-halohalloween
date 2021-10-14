import React from "react";
import styled from "styled-components";
import { Container, Grid, Text } from "../elements";
import {
  emoji01,
  emoji01_hover,
  emoji02,
  emoji02_hover,
  emoji03,
  emoji03_hover,
  emoji04,
  emoji04_hover,
  emoji05,
  emoji05_hover,
  emoji06,
  emoji06_hover,
} from "../image";

const ContactUs = () => {
  const [hover, setHover] = React.useState({
    emoji01: false,
    emoji02: false,
    emoji03: false,
    emoji04: false,
    emoji05: false,
    emoji06: false,
  });
  return (
    <Grid margin="40px 0 0 0">
      <Container>
        <Text size="26px">ContactUs</Text>
        <Grid is_flex justify="space-between" margin="30px 0 0 0">
          <Grid width="49%" padding="25px" bg="#eee">
            <Grid is_flex justify="space-between">
              <TeamImageWrap
                onMouseOver={() => setHover({ ...hover, emoji01: true })}
                onMouseOut={() => setHover({ ...hover, emoji01: false })}
              >
                <TeamImage src={!hover.emoji01 ? emoji01 : emoji01_hover} />
              </TeamImageWrap>
              <Grid width="60%">
                <Text>이름</Text>
                <Text>연락처</Text>
                <Text>GitHub</Text>
              </Grid>
            </Grid>
            <Grid margin="20px 0 0 0">
              <Text>맡은 부분</Text>
              <Text>혹은 그 외 추가로 넣고 싶은 내용들</Text>
            </Grid>
          </Grid>
          <Grid width="49%" padding="25px" bg="#eee">
            <Grid is_flex justify="space-between">
              <TeamImageWrap
                onMouseOver={() => setHover({ ...hover, emoji02: true })}
                onMouseOut={() => setHover({ ...hover, emoji02: false })}
              >
                <TeamImage src={!hover.emoji02 ? emoji02 : emoji02_hover} />
              </TeamImageWrap>
              <Grid width="60%">
                <Text>이름</Text>
                <Text>연락처</Text>
                <Text>GitHub</Text>
              </Grid>
            </Grid>
            <Grid margin="20px 0 0 0">
              <Text>맡은 부분</Text>
              <Text>혹은 그 외 추가로 넣고 싶은 내용들</Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid is_flex justify="space-between" margin="30px 0 0 0">
          <Grid width="49%" padding="25px" bg="#eee">
            <Grid is_flex justify="space-between">
              <TeamImageWrap
                onMouseOver={() => setHover({ ...hover, emoji03: true })}
                onMouseOut={() => setHover({ ...hover, emoji03: false })}
              >
                <TeamImage src={!hover.emoji03 ? emoji03 : emoji03_hover} />
              </TeamImageWrap>
              <Grid width="60%">
                <Text>이름</Text>
                <Text>연락처</Text>
                <Text>GitHub</Text>
              </Grid>
            </Grid>
            <Grid margin="20px 0 0 0">
              <Text>맡은 부분</Text>
              <Text>혹은 그 외 추가로 넣고 싶은 내용들</Text>
            </Grid>
          </Grid>
          <Grid width="49%" padding="25px" bg="#eee">
            <Grid is_flex justify="space-between">
              <TeamImageWrap
                onMouseOver={() => setHover({ ...hover, emoji04: true })}
                onMouseOut={() => setHover({ ...hover, emoji04: false })}
              >
                <TeamImage src={!hover.emoji04 ? emoji04 : emoji04_hover} />
              </TeamImageWrap>

              <Grid width="60%">
                <Text>이름</Text>
                <Text>연락처</Text>
                <Text>GitHub</Text>
              </Grid>
            </Grid>
            <Grid margin="20px 0 0 0">
              <Text>맡은 부분</Text>
              <Text>혹은 그 외 추가로 넣고 싶은 내용들</Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid is_flex justify="space-between" margin="30px 0 0 0">
          <Grid width="49%" padding="25px" bg="#eee">
            <Grid is_flex justify="space-between">
              <TeamImageWrap
                onMouseOver={() => setHover({ ...hover, emoji05: true })}
                onMouseOut={() => setHover({ ...hover, emoji05: false })}
              >
                <TeamImage src={!hover.emoji05 ? emoji05 : emoji05_hover} />
              </TeamImageWrap>

              <Grid width="60%">
                <Text>이름</Text>
                <Text>연락처</Text>
                <Text>GitHub</Text>
              </Grid>
            </Grid>
            <Grid margin="20px 0 0 0">
              <Text>맡은 부분</Text>
              <Text>혹은 그 외 추가로 넣고 싶은 내용들</Text>
            </Grid>
          </Grid>
          <Grid width="49%" padding="25px" bg="#eee">
            <Grid is_flex justify="space-between">
              <TeamImageWrap
                onMouseOver={() => setHover({ ...hover, emoji06: true })}
                onMouseOut={() => setHover({ ...hover, emoji06: false })}
              >
                <TeamImage src={!hover.emoji06 ? emoji06 : emoji06_hover} />
              </TeamImageWrap>
              <Grid width="60%">
                <Text>이름</Text>
                <Text>연락처</Text>
                <Text>GitHub</Text>
              </Grid>
            </Grid>
            <Grid margin="20px 0 0 0">
              <Text>맡은 부분</Text>
              <Text>혹은 그 외 추가로 넣고 싶은 내용들</Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

const TeamImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
`;
const TeamImage = styled.img`
  width: 55px;
  margin: 0 0 8px 6px;
  object-fit: cover;
  &:hover {
  }
`;
export default ContactUs;
