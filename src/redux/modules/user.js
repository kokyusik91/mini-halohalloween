import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/axios';

//action type
const IS_LOADING = 'IS_LOADING';
const LOG_IN = 'LOG_IN';
const SET_USER = 'SET_USER';

//action creator
const isloading = createAction(IS_LOADING, (value) => ({ value }));
const logIn = createAction(LOG_IN, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

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
      const res = await apis.create(`/user/register`, user);
      console.log('회원가입 서버연동 성공 === ', res.data.Message);
      alert(res.data.Message);
      history.push('/login');
      dispatch(isloading(false));
    } catch (e) {
      dispatch(isloading(false));
      console.log('error :::::: ', e);
    }
  };
};

export const loginFB = (user) => {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(isloading(true));
      const res = await apis.create(`/user/auth`, user);
      const token = res.data.token;
      if (token) {
        console.log(token);
        sessionStorage.setItem('token', `${token}`);
        // localStorage.setItem("token", `${res.data.token}`);
      }
      // 일단 userEmail이 user 정보에 담기게 함.
      // 실제로는 userNickname 이 리덕스의 정보에 담겨야 해서,
      // 서버에서 유저 닉네임으로 받는걸로 나중에 변경할 예정입니다.
      dispatch(setUser({ userEmail: user.userEmail }));
      history.push('/');
      dispatch(isloading(false));
    } catch (e) {
      dispatch(isloading(false));
      alert(e);
      console.log('error === ', e);
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
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = action.payload.is_login;
      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  loginFB,
  signupFB,
  setUser,
};

export { actionCreators };
