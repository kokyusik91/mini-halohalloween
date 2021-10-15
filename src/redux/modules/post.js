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
      alert("포스팅에 성공하였습니다!");
      console.log(res);
    } catch (e) {
      console.log("error :::::: ", e);
    }
    const user_data = getState().user.user;
    const addPostData = { ...post_data, postingAuthor: user_data.userNickname };
    dispatch(addPost(addPostData));
  };
};

const updatePostFB = (update_postdata) => {
  return async function (dispatch, getState) {
    console.log("미들웨어로 넘어온", update_postdata);
    try {
      const res = await apis.update("post/postModify", update_postdata);
      alert("수정에 성공하였습니다.");
      console.log(res);
    } catch (e) {
      console.log("error :::::: ", e);
    }
    //업데이트 한 정보를 기존 post_list의 하나의 객체의 형식에 들어있는 데이터와 양식을 맞춰주기위해 필요한 userEmail을 가져온다.
    const user_data = getState().user.user;
    //리듀서에 넘겨 기존 State에 갈아낄 데이터
    const realUpdate_postdata = {
      id: update_postdata.postID,
      postID: update_postdata.postID,
      postingAuthor: update_postdata.postingAuthor,
      postingComment: update_postdata.postingComment,
      postingDate: update_postdata.postingUpdate,
      postingDel: 1,
      postingEmail: user_data.userEmail,
      postingTitle: update_postdata.postingTitle,
      __v: 0,
      _id: update_postdata.postID,
    };

    dispatch(updatePost(realUpdate_postdata));
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
    // let currentArray = getState().post.post_list;
    // let array = currentArray.filter((el) => {
    //   return el.id !== postID;
    // });
    // console.log(array);
    dispatch(deletePost(postID));
  };
};

const getPostBestFB = () => {
  return async (dispatch) => {
    try {
      const res = await apis.get("post/postBest");
      const list = res.data.postList;
      console.log("list = ", list);
      dispatch(getPostBest(list));
    } catch (e) {
      alert(e.response);
      console.log("e.response", e.response);
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
        draft.post_list.push({
          ...action.payload.post_data,
        });
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let index = draft.post_list.findIndex((el) => {
          return el.postID === action.payload.updatePost_list.postID;
        });
        draft.post_list[index] = action.payload.updatePost_list;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list = draft.post_list.filter((el) => {
          return el.postID !== action.payload.post_id;
        });
      }),
    [GET_POST_BEST]: (state, action) => {
      produce(state, (draft) => {
        console.log("action.payload.best_list = ", action.payload.best_list);
        draft.best_list = action.payload.best_list;
        console.log("state = ", state);
      });
    },
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
