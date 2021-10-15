// Text.js
import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
  };

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: 0,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "900" : "600")};
  line-height: 1.6;
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")}
`;

export default Text;
