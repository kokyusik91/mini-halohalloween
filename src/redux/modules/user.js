import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action type
const IS_LOADING = "IS_LOADING";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SIGN_UP = "SIGN_UP";

//action creator
const isloading = createAction(IS_LOADING, (value) => ({ value }));
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const signup = createAction(SIGN_UP, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_login: false,
  is_loading: false,
};

export const signupFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(isloading(true));
      const res = await apis.create("/user/register", user);
      console.log("회원가입 서버연동 성공 === ", res.data.Message);
      alert(res.data.Message);
      dispatch(isloading(false));
    } catch (e) {
      dispatch(isloading(false));
      console.log("error :::::: ", e);
    }
  };
};

export const loginFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(isloading(true));
      const res = await apis.create(`/user/auth`, user);
      if (res.data.token) {
        window.sessionStorage.setItem("token", `${res.data.token}`);
      }
      history.push("/");
      dispatch(isloading(false));
    } catch (e) {
      dispatch(isloading(false));
      alert(e);
      console.log("error === ", e);
    }
  };
};

export default handleActions(
  {
    [IS_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.value;
      }),
    [LOG_IN]: (state, action) => produce(state, (draft) => {}),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [SIGN_UP]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  logIn,
  loginFB,
  signupFB,
  getUser,
  logOut,
};

export { actionCreators };
