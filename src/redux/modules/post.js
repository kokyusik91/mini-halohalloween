import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action type
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

// action creator
const setPost = createAction(SET_POST, (post) => ({ post }));
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
  test: "1111",
};

//middleware
const setPostFB = () => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.get("post/postlist");
      const post_list = res.data.postList;
      console.log("서버에서 받아온 데이터", post_list);
      dispatch(setPost(post_list));
    } catch (e) {
      console.log("error ? :::::: ", e);
    }
  };
};

const addPostFB = (post_data) => {
  return async function (dispatch, getState) {
    try {
      console.log("에드포스트", post_data);
      const res = await apis.create("/post/posting", post_data);
      alert("포스팅에 성공하였습니다!");
      console.log(res);
    } catch (e) {
      console.log("error :::::: ", e);
    }
    dispatch(addPost(post_data));
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("리듀서", action.payload.post);
        draft.post_list = action.payload.post;
      }),
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
  setPostFB,
};

export { actionCreators };
