import React from "react";
import styled from "styled-components";
import { Container, Text } from "../elements";
import halohalloween from "../halohalloween.svg";
const NotFound = (props) => {
  return (
    <Container height="70vh">
      <NotFoundImageWrap>
        <NotFoundImage src={halohalloween} />
        <Text margin="20px 0 0 0" size="20px">
          페이지를 찾을 수 없어요!
        </Text>
      </NotFoundImageWrap>
    </Container>
  );
};

const NotFoundImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`;
const NotFoundImage = styled.img`
  width: 100px;
`;

export default NotFound;
