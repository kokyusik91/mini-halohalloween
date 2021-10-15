import React from "react";
import styled, { keyframes } from "styled-components";
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
        <Text size="26px">Contact Us</Text>
        <Grid is_flex justify="space-between">
          <TeamGrid
            onMouseOver={() => setHover({ ...hover, emoji04: true })}
            onMouseOut={() => setHover({ ...hover, emoji04: false })}
          >
            <GridCenter>
              <TeamImageWrap>
                <TeamImage src={!hover.emoji04 ? emoji04 : emoji04_hover} />
              </TeamImageWrap>
              <Grid>
                <Text>이름 : Byunggwan Lee</Text>
                <Text>Email : fnrkp089@gmail.com</Text>
                <Text>
                  GitHub :
                  <GitHubLink
                    href="https://github.com/fnrkp089"
                    target="_blank"
                    title="GitHub 이동"
                  >
                    github.com/fnrkp089
                  </GitHubLink>
                </Text>
                <Text>Skill : Node</Text>
              </Grid>
            </GridCenter>
          </TeamGrid>
          <TeamGrid
            onMouseOver={() => setHover({ ...hover, emoji03: true })}
            onMouseOut={() => setHover({ ...hover, emoji03: false })}
          >
            <GridCenter>
              <TeamImageWrap>
                <TeamImage src={!hover.emoji03 ? emoji03 : emoji03_hover} />
              </TeamImageWrap>
              <Grid>
                <Text>이름 : Sunghyun Hong</Text>
                <Text>Email : passionnhope0110@gmail.com</Text>
                <Text>
                  GitHub :
                  <GitHubLink
                    href="https://github.com/jenny9197"
                    target="_blank"
                  >
                    github.com/jenny9197
                  </GitHubLink>
                </Text>
                <Text>Skill : Node</Text>
              </Grid>
            </GridCenter>
          </TeamGrid>
          <TeamGrid
            onMouseOver={() => setHover({ ...hover, emoji06: true })}
            onMouseOut={() => setHover({ ...hover, emoji06: false })}
          >
            <GridCenter>
              <TeamImageWrap>
                <TeamImage src={!hover.emoji06 ? emoji06 : emoji06_hover} />
              </TeamImageWrap>
              <Grid>
                <Text>이름 : Seonho An</Text>
                <Text>Email : seonho.an.dev@gmail.com</Text>
                <Text>
                  GitHub :
                  <GitHubLink
                    href="https://github.com/seonhoAn"
                    target="_blank"
                  >
                    github.com/seonhoAn
                  </GitHubLink>
                </Text>
                <Text>Skill : Node</Text>
              </Grid>
            </GridCenter>
          </TeamGrid>
        </Grid>
        <Grid is_flex justify="space-between">
          <TeamGrid
            onMouseOver={() => setHover({ ...hover, emoji02: true })}
            onMouseOut={() => setHover({ ...hover, emoji02: false })}
          >
            <GridCenter>
              <TeamImageWrap>
                <TeamImage src={!hover.emoji02 ? emoji02 : emoji02_hover} />
              </TeamImageWrap>
              <Grid>
                <Text>이름 : Kyusik Ko</Text>
                <Text>Email : kokyusik91@naver.com</Text>
                <Text>
                  GitHub :
                  <GitHubLink
                    href="https://github.com/kokyusik91"
                    target="_blank"
                    title="GitHub 이동"
                  >
                    github.com/kokyusik91
                  </GitHubLink>
                </Text>
                <Text>Skill : React</Text>
              </Grid>
            </GridCenter>
          </TeamGrid>
          <TeamGrid
            onMouseOver={() => setHover({ ...hover, emoji01: true })}
            onMouseOut={() => setHover({ ...hover, emoji01: false })}
          >
            <GridCenter>
              <TeamImageWrap>
                <TeamImage src={!hover.emoji01 ? emoji01 : emoji01_hover} />
              </TeamImageWrap>
              <Grid>
                <Text>이름 : Jisun Seok</Text>
                <Text>Email : seokjiseon@gmail.com</Text>
                <Text>
                  GitHub :
                  <GitHubLink href="https://github.com/sunysty" target="_blank">
                    github.com/sunysty
                  </GitHubLink>
                </Text>
                <Text>Skill : React</Text>
              </Grid>
            </GridCenter>
          </TeamGrid>
          <TeamGrid
            onMouseOver={() => setHover({ ...hover, emoji05: true })}
            onMouseOut={() => setHover({ ...hover, emoji05: false })}
          >
            <GridCenter>
              <TeamImageWrap>
                <TeamImage src={!hover.emoji05 ? emoji05 : emoji05_hover} />
              </TeamImageWrap>
              <Grid>
                <Text>이름 : Mida Lee</Text>
                <Text>Email : midahihi@gmail.com</Text>
                <Text>
                  GitHub :
                  <GitHubLink href="https://github.com/dam-lee" target="_blank">
                    github.com/dam-lee
                  </GitHubLink>
                </Text>
                <Text>Skill : React</Text>
              </Grid>
            </GridCenter>
          </TeamGrid>
        </Grid>
      </Container>
    </Grid>
  );
};
const fade = keyframes`
  0% {
    background-color: #f1f3f5;
    color:#243443
  }
  100% {
    background-color: #CD7F4F;
    color:#fff
  }
`;
const TeamGrid = styled.div`
  width: 32%;
  margin-top: 30px;
  padding: 35px 30px;
  background-color: #f1f3f5;
  box-shadow: 3px 3px 3px #dee2e6;

  @media ${({ theme }) => theme.tablet} {
    padding: 15px 20px;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    margin-top: 20px;
  }
  p,
  a {
    color: #243443;
  }
  &:hover {
    animation: ${fade} 1s forwards;
    p,
    a {
      animation: ${fade} 1s forwards;
    }
  }
`;
const GridCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const TeamImageWrap = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: #fff;
`;
const TeamImage = styled.img`
  width: 55px;
  margin: 3px 0 0 6px;
  object-fit: cover;
`;

const GitHubLink = styled.a`
  padding-left: 3px;
`;
export default ContactUs;
