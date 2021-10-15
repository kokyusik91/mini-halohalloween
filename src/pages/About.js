import React from "react";
import { Container, Grid, Text, Image } from "../elements";
import {
  hallween01,
  hallween02,
  hallween03,
  hallween04,
  main,
  about,
  // emoji01,
} from "../image";
const About = () => {
  return (
    <>
      <Grid margin="40px 0 0 0">
        <Container>
          <Grid>
            <Image height="300px" src={about} />
          </Grid>
          <Text size="26px" margin="30px 0 0 0">
            할로윈소개
          </Text>
          <Grid margin="20px 0 0 0">
            <Text size="20px">October 31</Text>
            <Grid margin="10px 0 0 0">
              <Text>
                흔히 사람들은 할로윈에 대해 들어본 적은 있지만, 할로윈이 언제
                생겼는지에 대해 들어본 적 없는 것 같아 간략히 소개합니다.
              </Text>
              <Text margin="6px 0 0 0">
                고대 켈트족의 Samhain 축제로 거슬러 올라가, 11월 1일 날짜에
                축하하고자 하는 시간들을 보냈습니다.
              </Text>
              <Text>
                이들은, 11월 1일을 어둡고 추운 겨울이 시작되는 날로, 죽음과도
                관련이 있지만, 죽은 자들의 유령이 땅으로 돌아온다고 믿은
                Samhain을 축하했습니다.
              </Text>
              <Text margin="6px 0 0 0">
                이 당시, 농작물의 피해를 주는 것 이외에, 켈트족은 영혼이 있다면,
                미래의 모습이 어떨지에 대해 예측할 수 있었다는 이야기가 전해져
                내려오고 있으며, 그들에게는 길고 어두운 겨울 기간들이 중요한
                의미를 지니기도 했습니다.
              </Text>
              <Text margin="6px 0 0 0">
                더불어 이 날을 기념하고자, 모닥불을 지었으며, 켈트 신들을 위해
                농작물과 동물을 제물로 바치기도 했으며, 동물의 머리와 가죽으로
                구성된 의상을 입고 서로의 운을 나누기도 했습니다.
              </Text>
              <Text>
                대표적인 예시로 북미의 경우, 할로윈이 시작했을 초기엔, 다양한
                제철 견과류 및 초콜릿, 껌, 호박으로 시작했지만, 현재는, 장식,
                의상 및 사탕과 초콜릿 등을 trick or treat 방식으로 축하하며 날을
                기념한다.
              </Text>
              <Text></Text>
            </Grid>
          </Grid>
          <Grid is_flex justify="space-between" margin="30px 0 0 0">
            <Grid width="24%">
              <Image src={hallween01} height="300px" />
            </Grid>
            <Grid width="24%">
              <Image src={hallween02} height="300px" />
            </Grid>
            <Grid width="24%">
              <Image src={hallween03} height="300px" />
            </Grid>
            <Grid width="24%">
              <Image src={hallween04} height="300px" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default About;
