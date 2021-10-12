import React from 'react';
import styled from 'styled-components';

//기본: 남색버튼, is_white: 하얀색버튼

const Button = (props) => {
  const { text, _onClick, children, margin, width, border, is_white } = props;
  const styles = {
    width: width,
    border: border,
    margin: margin,
  };

  if (is_white) {
    return (
      <WhiteButton {...styles} onClick={_onClick}>
        {children}
      </WhiteButton>
    );
  } else {
    return (
      <BlueButton {...styles} onClick={_onClick}>
        {children}
      </BlueButton>
    );
  }
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  width: '100%',
  bg: true,
  color: 'black',
  margin: 0,
  border: true,
  is_white: false,
};

//border 색
const BlueButton = styled.button`
  width: ${(props) => props.width};
  background-color: #243443;
  color: #fff;
  padding: 12px 0px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border: 1px solid #243443;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
`;

const WhiteButton = styled.button`
  width: ${(props) => props.width};
  background-color: #fff;
  color: #243443;
  padding: 12px 0px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #243443;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`;

export default Button;
