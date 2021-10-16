// Text.js
import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, is_title } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    is_title: is_title,
  };

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: 0,
  is_title: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.is_title ? "26px" : props.size)};
  font-weight: ${(props) => (props.bold ? "900" : "600")};
  line-height: 1.6;
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};
  @media ${({ theme }) => theme.tablet} {
    font-size: ${(props) => (props.is_title ? "16px" : "13px")};
  } ;
`;

export default Text;
