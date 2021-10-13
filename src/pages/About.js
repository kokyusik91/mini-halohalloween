import React from "react";
import { Container, Grid, Text } from "../elements";
const About = () => {
  return (
    <Grid margin="40px 0 0 0">
      <Container>
        <Text size="26px">할로윈소개</Text>
        <Grid margin="30px 0 0 0">
          <Text>
            할로윈(Halloween)은 기원전 500년경 아일랜드 켈트족 풍습인 삼하인
            축제에서 유래되었습니다.
          </Text>
          <Text>
            켈트족은 사람이 죽은 후 1년 동안 다른 사람 몸속에 있다가 내세로
            나간다고 믿었습니다.
          </Text>
          <Text>
            그래서 그들은 한 해의 마지막 날인 10월 31일이 되면 죽음의 신에게
            이야기를 하여 혼을 달래고 악령을 쫓아냈다고 합니다!
          </Text>
          <Text>
            이때 죽은 자의 영혼이 집 안에 들어오지 못하도록 기괴한 복장을 하고
            귀신을 물리치는 행동을 하였습니다. 그것이 할로윈(Halloween)의
            첫시작입니다!
          </Text>
        </Grid>
      </Container>
    </Grid>
  );
};

export default About;
