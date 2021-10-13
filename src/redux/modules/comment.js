import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
// import { apis } from "../shared/axios";

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
// const setPostFB = () => {
//   return async function (dispatch, getState) {
//     // axios 부분
//     // apis
//     //   .getPost()
//     //   .then((response) => {
//     //     console.log(response.data);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
//   };
// };

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        //let data ={[post_id]: comment_list,...}
        draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
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
