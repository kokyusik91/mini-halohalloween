import React from "react";
import { Grid, Label, Input, Button } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
// import { emailCheck, passwordCheck } from "../shared/regExp";
import Spinner from "../shared/Spinner";

const Login = (props) => {
  const dispatch = useDispatch();
  const is_loading = useSelector((state) => state.user.is_loading);
  const [state, setState] = React.useState({ userEmail: "", userPassword: "" });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    if (state.userEmail === "" || state.userPassword === "") {
      alert("내용을 모두 입력해주세요");
      return;
    }
    // #### 이메일 비밀번호 정규표현식. 추후 배포할때 주석 해제 예정입니다!
    // if (!emailCheck(state.userEmail)) {
    //   alert("이메일 형식이 아닙니다. 다시 확인해주세요");
    //   return;
    // }
    // if (!passwordCheck(state.userPassword)) {
    //   alert("비밀번호는 영문 숫자 조합 6자리 이상입니다.");
    //   return;
    // }
    if (state.userEmail !== "" && state.userPassword !== "") {
      dispatch(userActions.loginFB(state));
    }
  };

  return (
    <>
      {is_loading && <Spinner />}
      <Grid
        width="30vw"
        height="60vh"
        margin="20vh auto"
        padding="40px 50px"
        bg="#f1f3f5"
      >
        <h1>로그인</h1>
        <Grid margin="20px 0 0 0">
          <Label>이메일</Label>
          <Input
            name="userEmail"
            value={state.userEmail}
            _onChange={onChange}
            placeholder="이메일 주소를 입력해주세요."
          />
        </Grid>
        <Grid margin="10px 0 0 0">
          <Label>비밀번호</Label>
          <Input
            name="userPassword"
            value={state.userPassword}
            _onChange={onChange}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </Grid>
        <Grid margin="20px 0 0 0">
          <Button type="blue" _onClick={onClick}>
            로그인
          </Button>
        </Grid>
        <Grid margin="20px 0 0 0">
          <Button type="white" _onClick={() => history.push("/signup")}>
            회원가입
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
