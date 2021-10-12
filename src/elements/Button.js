import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, width, border, is_white } = props;

  if (is_white) {
    const styles = {
      width: width,
      border: border,
      margin: margin,
    };

    return (
      <WhiteButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </WhiteButton>
    );
  }

  const styles = {
    margin: margin,
    width: width,
  };

  return (
    <BuleButton {...styles} onClick={_onClick}>
      {text ? text : children}
    </BuleButton>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  width: "100%",
  bg: true,
  color: true,
  margin: false,
  border: true,
  is_white: true,
};

//border 색
const BuleButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => (props.bg ? `#243443` : "#fff")};
  color: ${(props) => (props.color ? `#fff` : "#243443")};
  padding: 12px 0px;
  box-sizing: border-box;
  text-align: center;
  border: ${(props) => (props.border ? `1px solid #243443` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
`;

const WhiteButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => (props.bg ? "#fff" : "#243443")};
  color: ${(props) => (props.color ? "#243443" : "#fff")};
  padding: 12px 0px;
  box-sizing: border-box;
  text-align: center;
  border: ${(props) => (props.border ? `1px solid #243443` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
`;

export default Button;
