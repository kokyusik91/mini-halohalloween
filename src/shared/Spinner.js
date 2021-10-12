import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "../elements";
import halohalloween from "../halohalloween.svg";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Grid>
        <Halohalloween width="100px" src={halohalloween} />
        <Text>로딩중</Text>
      </Grid>
    </SpinnerContainer>
  );
};

const boxAnimation = keyframes`
  0%{
    margin-top:0;
  }
  100%{
   margin-top:50px;
  }
`;
const SpinnerContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;
const Halohalloween = styled.img`
  display: block;
  width: 100px;
  animation: ${boxAnimation} 1s 1s infinite linear alternate;
`;
const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

export default Spinner;
