import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { storage } from '../../shared/firebase';

// Action Type
// UPLOADING은 현재 이미지가 업로드 된 상태인지 아닌지 판별 해주는 상태
const UPLOADING = 'UPLOADING';
const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

//Action Creator
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

//Initial State
const initialState = {
  image_url: '',
  uploading: false,
};

//Middle ware

const uploadImageFB = (image) => {
  return function (dispatch, getState) {
    // 파일의 참조를 만든다. (image.name에 실제 파일 명이 담겨져있음 ex'hi.png')
    const _upload = storage.ref(`images/${image.name}`).put(image);
    // 업로드가 되면! 명령을 실행해줘라!! 현재는 console창에 올라간 데이터 확인!
    _upload.then((snapshot) => {
      // console.log(snapshot);
      // 올라갔으면 이미지 링크를 받아오면 된다!!!
      snapshot.ref.getDownloadURL().then((url) => {
        dispatch(uploadImage(url));
      });
    });
  };
};

//Reducer
export default handleActions(
  {
    [UPLOADING]: (state, action) => produce(state, (draft) => {}),
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        // console.log('리덕스에 넘어온 url', action.payload.image_url);
        draft.image_url = action.payload.image_url;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImageFB,
  uploadImage,
};

export { actionCreators };
