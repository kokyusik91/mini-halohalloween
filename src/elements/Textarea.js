import React from 'react';
import styled from 'styled-components';

const Textarea = (props) => {
  const { placeholder, _onChange, margin } = props;

  const styles = {
    margin: margin,
  };

  return (
    <React.Fragment>
      <ElTextarea
        placeholder={placeholder}
        row={10}
        onChange={_onChange}
        {...styles}
      />
    </React.Fragment>
  );
};

Textarea.defaultProps = {
  placeholder: '텍스트를 입력하세요',
  _onChange: () => {},
  margin: false,
};

const ElTextarea = styled.textarea`
  width: 100%;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  padding: 12px 4px;
  border: none;
  border: 1px solid #243443;
  box-sizing: border-box;
`;

export default Textarea;
