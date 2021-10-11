import React from "react";
import styled from "styled-components";

const Container = (props) => {
  return (
    <>
      <ContainerWrap>{props.children}</ContainerWrap>
    </>
  );
};

const ContainerWrap = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
export default Container;
