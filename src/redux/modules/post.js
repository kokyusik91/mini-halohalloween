import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action type
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const GET_POST_BEST = "GET_POST_BEST";

// action creator
const setPost = createAction(SET_POST, (post) => ({ post }));
const addPost = createAction(ADD_POST, (post_data) => ({ post_data }));
const updatePost = createAction(UPDATE_POST, (updatePost_list) => ({
  updatePost_list,
}));
const deletePost = createAction(DELETE_POST, (post_list) => ({ post_list }));
const getPostBest = createAction(GET_POST_BEST, (best_list) => ({ best_list }));
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
  best_list: [],
};

//middleware
const setPostFB = () => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.get("post/postlist");
      console.log(res);
      const post_list = res.data.postList;

      // console.log('서버에서 받아온 데이터', post_list);
      dispatch(setPost(post_list));
    } catch (e) {
      console.log("error ? :::::: ", e);
    }
  };
};

const addPostFB = (post_data) => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.create("post/posting", post_data);
      // 유저 Session에서 NickName 불러오기
      alert("포스팅에 성공하였습니다!");
      console.log(res);
    } catch (e) {
      console.log("error :::::: ", e);
    }
    dispatch(addPost(post_data));
  };
};

const updatePostFB = (update_postdata) => {
  return async function (dispatch, getState) {
    // console.log('미들웨어로 넘어온', update_postdata);
    try {
      const res = await apis.update("post/postModify", update_postdata);
      alert("수정에 성공하였습니다.");
      console.log(res);
    } catch (e) {
      console.log("error :::::: ", e);
    }
    dispatch(updatePost(update_postdata));
  };
};

const deletePostFB = (postID) => {
  return async function (dispatch, getState) {
    // console.log('미들웨어로 넘어온', postID);
    try {
      const res = await apis.update("post/postDelete", postID);
      alert("삭제에 성공하였습니다.");
      console.log(res);
    } catch (e) {
      console.log("error :::::: ", e);
    }
    // dispatch(deletePost(postID));
  };
};

const getPostBestFB = () => {
  return async (dispatch) => {
    try {
      const res = await apis.get("post/postBest");
      const list = res.data.postList;
      dispatch(getPostBest(list));
    } catch (e) {
      alert(e.response);
      console.log(e.response);
    }
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list = action.payload.post;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        const userNickname = sessionStorage.getItem("userNickname");
        draft.post_list.push({
          ...action.payload.post_data,
          postingAuthor: userNickname,
        });
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("리듀서로 넘어온 데이터", action.payload.updatePost_list);
        // findex써서 해당되는
        // draft.post_list.findIndex()
      }),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
    [GET_POST_BEST]: (state, action) =>
      produce(state, (draft) => {
        draft.best_list = action.payload.best_list;
      }),
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
  updatePostFB,
  deletePostFB,
  getPostBestFB,
};

export { actionCreators };
