import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import moment from "moment";
import { apis } from "../../shared/axios";

//action type
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({
  comment_id,
}));

// // 기본형식
// // {
// //   postingID: '',
// //   postingTitle: '',
// //   postingAuthor: '',
// //   postingComment: '',
// //   postingDate: '',
// //   postingComment: '',
// // },

//initialState
const initialState = { comment_list: [] };

//middleware
const addCommentFB = (comment) => {
  return async function (dispatch, getState) {
    //axios 부분
    // apis
    //   .getPost()
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      const newComment = {
        postingID: "61668228ba1286fac093414a",
        replyAuthor: "seok",
        replyComment: comment.comment,
      };
      const res = await apis.create("reply/replyPost", newComment);
      console.log(res);
      //리덕스저장
      dispatch(addComment(comment));
    } catch (e) {
      console.log("error ? :::::", e);
    }
  };
};

const deleteCommentFB = () => {
  return async function (dispatch, getState) {
    dispatch(deleteComment());
  };
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        //let data ={[post_id]: comment_list,...}
        //draft.list[action.payload.comment_id] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        //comment가 실제로 더해짐
        draft.comment_list.push(action.payload.comment);
        //draft =initalstate, action.payload.액션파라미터
      }),
    // [DELETE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.
    // }),
  },
  initialState
);

const actionCreators = {
  setComment,
  addComment,
  deleteComment,

  addCommentFB,
};

export { actionCreators };
