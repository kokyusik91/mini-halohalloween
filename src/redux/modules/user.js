import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action type
const IS_LOADING = "user/IS_LOADING";
const SET_USER = "user/SET_USER";

//action creator
const isloading = createAction(IS_LOADING, (value) => ({ value }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_token: null,
  is_login: false,
  is_loading: false,
};

export const signupFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(isloading(true));
      const res = await apis.create(`user/register`, user);
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
      const res = await apis.create(`user/auth`, user);
      console.log("login res = ", res);
      const token = res.data.token;
      // const userInfo = { userNickname: res.data.userNickname };
      if (token) {
        sessionStorage.setItem("token", `${token}`);
        // sessionStorage.setItem("userNickname", `${res.data.userNickname}`);/
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

// 이거를 추후 로그인 여부 체크하는 api로 변경할 예정입니다.
export const setUserFB = () => {
  return async (dispatch) => {
    const res = await apis.get(`user/chkLogin`);
    console.log("setUserFB res == ", res);
    dispatch(setUser(res.data.user));
  };
};
// export const setUserFB = () => {
//   return (dispatch, getState, { history }) => {
//     const is_user = sessionStorage.getItem("userNickname");
//     dispatch(setUser(is_user));
//   };
// };

export const logOutFB = () => {
  return (dispatch, getState, { history }) => {
    sessionStorage.removeItem("token");
    dispatch(setUser(null));
    history.replace("/");
    alert("로그아웃 되었습니다.");
  };
};

export default handleActions(
  {
    [IS_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.value;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = action.payload.user !== undefined ? true : false;
      }),
  },
  initialState
);

const actionCreators = {
  setUserFB,
  loginFB,
  logOutFB,
  signupFB,
};

export { actionCreators };
