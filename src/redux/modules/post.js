import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

//action type
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// action creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const updatePost = createAction(UPDATE_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (post_list) => ({ post_list }));

//initialState
const initialState = {
  post_list: [
    {
      postingID: '',
      postingTitle: '',
      postingAuthor: '',
      postingComment: '',
      postingDate: '',
      postingComment: '',
    },
  ],
  user_info: {
    userId: '',
    userNickname: '',
    uuid: '',
  },
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
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
};

export { actionCreators };
