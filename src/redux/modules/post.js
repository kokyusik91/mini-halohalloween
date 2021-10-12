import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/axios';

//action type
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// action creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_data) => ({ post_data }));
const updatePost = createAction(UPDATE_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (post_list) => ({ post_list }));

// 기본형식
// {
//   postingID: '',
//   postingTitle: '',
//   postingAuthor: '',
//   postingComment: '',
//   postingDate: '',
//   postingComment: '',
// },

//initialState
const initialState = {
  post_list: [],
};

//middleware
const addPostFB = (post_data) => {
  return async function (dispatch, getState) {
    console.log(post_data);
    try {
      const res = await apis.create('/post/posting', post_data);
      alert('포스팅에 성공하였습니다!');
      console.log(res);
    } catch (e) {
      console.log('error :::::: ', e);
    }
    dispatch(addPost(post_data));
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list.push(action.payload.post_data);
      }),
    [UPDATE_POST]: (state, action) => produce(state, (draft) => {}),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  updatePost,
  deletePost,
  addPostFB,
};

export { actionCreators };
