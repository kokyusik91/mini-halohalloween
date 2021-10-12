/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const Upload = (props) => {
  const { type, color, backgroundColor } = props;

  const styles = {
    color: color,
    backgroundColor: backgroundColor,
  };

  return (
    <React.Fragment>
      <LabelFile htmlFor='ex_file' {...styles}>
        업로드
      </LabelFile>
      <UploadForm id='ex_file' type={type} {...styles} />
    </React.Fragment>
  );
};

Upload.defaultProps = {
  type: 'file',
  backgroundColor: '#243443',
  color: '#fff',
};

const LabelFile = styled.label`
  display: inline-block;
  color: ${(props) => props.color};
  padding: 12px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 12px;
  cursor: pointer;
`;

const UploadForm = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export default Upload;
