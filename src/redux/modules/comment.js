import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import moment from "moment";
import { apis } from "../../shared/axios";

//action type
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const setComment = createAction(SET_COMMENT, (list) => ({ list }));
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
//서버에서 데이터 받아오기위함
// const setCommentFB = (postID) => {
//   return async function (dispatch, getState) {
//     console.log('미들웨어에 넘어왔나?????', postID);
//     try {
//       const res = await apis.getReply('reply/replyList', postID.postID);
//       console.log('현재 포스트 아이디 : ' + postID.postID);
//       console.log('서버에서 응답받아온 데이터', res.data.Replies);
//       console.log('서버에서 POSTID를 넘겨서 받은 데이터', res);
//       const 커멘트 = res.data.Replies;
//       // console.log('서버에서준 응답데이터', 커멘트);
//       dispatch(setComment(커멘트));

//       //comment_list는 어디서 받아오는 거지??
//     } catch (e) {
//       console.log('error ? :::::: ', e);
//     }
//   };
// };

// 미다 수정
const setCommentFB = (postID) => {
  return async function (dispatch, getState) {
    try {
      const res = await apis.getReply("reply/replyList", postID.postID);
      const list = res.data.Replies;
      dispatch(setComment(list));
    } catch (e) {
      console.log("error ? :::::: ", e);
    }
  };
};

const addCommentFB = (comment) => {
  return async function (dispatch, getState) {
    try {
      console.log("미들웨어로 넘어왔나?", comment);
      const res = await apis.create("reply/replyPost", comment);
      console.log(res, "둥록확인");
      //리덕스저장
      // 사랑합니다 댓글 및 유저정보.
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
        // 미다 수정
        draft.comment_list = action.payload.list;
        //let data ={[post_id]: comment_list,...}
        //draft.list[action.payload.comment_id] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        //comment가 실제로 더해짐
        draft.comment_list.push(action.payload.comment);

        // [해당하는 PostID] 게시물에만 댓글을 달아준다.
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
  setCommentFB,
};

export { actionCreators };
