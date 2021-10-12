import React from "react";
import styled from "styled-components";

const Label = (props) => {
  const { flex, margin, padding, fontSize, color, children } = props;
  const styles = {
    flex: flex,
    margin: margin,
    padding: padding,
    fontSize: fontSize,
    color: color,
  };
  return <LabelWrap {...styles}>{children}</LabelWrap>;
};

Label.defaultProps = {
  flex: false,
  margin: "0px",
  padding: "0px",
  fontSize: "13px",
  color: "#343a40",
};

const LabelWrap = styled.label`
  ${(props) => props.flex && `flex:1`};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
  ${(props) => (props.color ? `color:${props.color}` : "")};
`;
export default Label;
