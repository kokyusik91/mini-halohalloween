import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action type
const IS_LOADING = "IS_LOADING";
const IS_TOKEN = "IS_TOKEN";

//action creator
const isloading = createAction(IS_LOADING, (value) => ({ value }));
const isToken = createAction(IS_TOKEN, (token) => ({ token }));

//initialState
const initialState = {
  user: null,
  is_token: null,
  is_loading: false,
};

export const signupFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(isloading(true));
      const res = await apis.create(`/user/register`, user);
      console.log("signup res === ", res);
      alert(res.data.Message);
      history.push("/login");
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
      console.log("login res = ", res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("token", `${token}`);
        // localStorage.setItem("token", `${res.data.token}`);
      }
      // 일단 userEmail이 user 정보에 담기게 함.
      // 실제로는 userNickname 이 리덕스의 정보에 담겨야 해서,
      // 서버에서 유저 닉네임으로 받는걸로 나중에 변경할 예정입니다.
      // dispatch(setUser({ userEmail: user.userEmail }));

      history.push("/");
      dispatch(isloading(false));
    } catch (e) {
      dispatch(isloading(false));
      alert(e);
      console.log("error === ", e);
    }
  };
};

export const logOutFB = () => {
  return (dispatch, getState, { history }) => {
    sessionStorage.removeItem("token");
    history.replace("/");
    alert("로그아웃 되었습니다.");
  };
};

export const isTokenFB = () => {
  return (dispatch, getState, { history }) => {
    const is_token = sessionStorage.getItem("token");
    dispatch(isToken(is_token));
  };
};

export default handleActions(
  {
    [IS_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.value;
      }),
    [IS_TOKEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_token = action.payload.token;
      }),
  },
  initialState
);

const actionCreators = {
  isTokenFB,
  loginFB,
  logOutFB,
  signupFB,
};

export { actionCreators };
