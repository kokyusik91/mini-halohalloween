/* eslint-disable */

import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { storage } from '../shared/firebase';
import { actionCreators as imageActions } from '../redux/modules/image';
import { useDispatch } from 'react-redux';

const Upload = (props) => {
  const { type, color, backgroundColor } = props;

  const styles = {
    color: color,
    backgroundColor: backgroundColor,
  };

  // Input태그에 접근하기 위해 useRef()사용.
  const fileInput = useRef();
  const dispatch = useDispatch();

  // onChange 함수에서 선택한 파일의 정보를 알 수 있다.
  const selectFile = (e) => {
    console.log('e', e);
    console.log('e.target', e.target);
    console.log('e.target.files', e.target.files[0]);
    // Ref로 접근가능한지 확인
    console.log('useRef', fileInput.current.files[0]);
    let image = fileInput.current.files[0];
    console.log('미들웨어로 넘겨줄 파일객체', image);
    dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <React.Fragment>
      <LabelFile htmlFor='ex_file' {...styles}>
        업로드
      </LabelFile>
      <UploadForm
        id='ex_file'
        type={type}
        {...styles}
        onChange={selectFile}
        ref={fileInput}
      />
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
