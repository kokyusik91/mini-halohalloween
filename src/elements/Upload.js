/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const Upload = (props) => {
  const { placeholder, color } = props;
  const styles = {
    color: color,
  };

  return (
    <React.Fragment>
      <UploadForm placeholder={placeholder} />
    </React.Fragment>
  );
};

Upload.defaultProps = {
  placeholder: '업로드 하기',
  color: '#243443',
};

const UploadForm = styled.input`
  width: 100%;
  ${(props) => (props.color ? `margin:${props.color}` : '')};
`;

export default Upload;
