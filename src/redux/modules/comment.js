import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
// import { apis } from "../shared/axios";

//action type
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const setComment = createAction(SET_COMMENT, (comment_list) => ({ comment_list }));
const addComment = createAction(ADD_COMMENT, (comment_list) => ({ comment_list }));
const deleteComment = createAction(DELETE_COMMENT, (comment_list) => ({ comment_list }));

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
  comment_list: [{ comment: "안녕하세요" }, { comment: "반가워요" }],
};



//middleware
const setPostFB = () => {
  return async function (dispatch, getState) {
    // axios 부분
    // apis
    //   .getPost()
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {
      //let data ={[post_id]: comment_list,...}
      draft.list[action.payload.comment_id] = action.payload.comment_list;
    }),
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setComment,
  addComment,
  deleteComment,
};

export { actionCreators };
