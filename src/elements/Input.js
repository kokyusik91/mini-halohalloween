/* eslint-disable */

import React from "react";
import styled from "styled-components";

const Input = (props) => {
  console.log(props);
  const { placeholder, type, _onChange, width, margin, display, flex } = props;

  const styles = {
    display: display,
    width: width,
    margin: margin,
    flex: flex,
  };

  return (
    <React.Fragment>
      <InputForm
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        {...styles}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "텍스트를 입력해주세요",
  type: "text",
  _onChange: () => {},
  margin: false,
  width: "100%",
};

const InputForm = styled.input`
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  padding: 12px 4px;
  border: none;
  border: 1px solid #243443;
  box-sizing: border-box;
`;

export default Input;
