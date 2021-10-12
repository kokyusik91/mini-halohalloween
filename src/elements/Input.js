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
<<<<<<< HEAD
  width: '100%',
  display: false,
  flex: false,
=======
  width: "100%",
>>>>>>> 10f5c273372e86cfdc73596eac470ffb2789aedf
};

const InputForm = styled.input`
  width: ${(props) => props.width};
<<<<<<< HEAD
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.display ? `display: ${props.display};` : '')};
  ${(props) => (props.flex ? `flex: 1 ;` : '')};
  display: block;
  padding: 8px;
  /* padding: 12px 4px; */
=======
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  padding: 12px 4px;
>>>>>>> 10f5c273372e86cfdc73596eac470ffb2789aedf
  border: none;
  border: 1px solid #243443;
  box-sizing: border-box;
`;

export default Input;
