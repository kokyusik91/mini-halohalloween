import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const { margin, children } = props;
  const styles = {
    margin: margin,
  };
  return (
    <>
      <ContainerWrap {...styles}>{children}</ContainerWrap>
    </>
  );
};
Container.defaultProps = {
  margin: "0 auto",
};
const ContainerWrap = styled.div`
  width: 1080px;
  ${(props) => (props.margin ? `margin:${props.margin}` : "0 auto")};
`;
export default Container;
