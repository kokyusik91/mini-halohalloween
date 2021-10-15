/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";

const Input = (props) => {
  const {
    placeholder,
    type,
    _onChange,
    width,
    margin,
    flex,
    value,
    name,
    disabled,
    _onSubmit,
  } = props;

  const styles = {
    width: width,
    margin: margin,
    flex: flex,
  };

  return (
    <React.Fragment>
      <InputForm
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={_onChange}
        disabled={disabled}
        onKeyPress={(e) => e.key === "Enter" && _onSubmit(e)}
        {...styles}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "텍스트를 입력해주세요",
  type: "text",
  margin: false,
  width: "100%",
  flex: false,
  disabled: false,
  _onChange: () => {},
  _onSubmit: () => {},
};

const InputForm = styled.input`
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.display ? `display: ${props.display};` : "")};
  ${(props) => (props.flex ? `flex: 1 ;` : "")};
  padding: 8px;
  /* padding: 12px 4px; */
  border: none;
  /* border: 1px solid #243443; */
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export default Input;
