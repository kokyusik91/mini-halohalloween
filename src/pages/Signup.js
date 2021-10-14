import React from "react";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck, passwordCheck } from "../shared/regExp";
import { Grid, Label, Input, Button } from "../elements";
import Spinner from "../shared/Spinner";

const Signup = (props) => {
  const dispatch = useDispatch();
  const is_loading = useSelector((state) => state.user.is_loading);

  const [state, setState] = React.useState({
    userEmail: "",
    userNickname: "",
    userPassword: "",
    passwordCheck: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onClick = () => {
    if (state.userEmail === "") {
      alert("이메일 주소를 입력해주세요");
      return;
    }
    if (!emailCheck(state.userEmail)) {
      alert("이메일 형식이 아닙니다. 다시 확인해주세요");
      return;
    }
    if (state.userNickname === "") {
      alert("닉네임을 입력해주세요");
      return;
    }
    if (state.userPassword === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!passwordCheck(state.userPassword)) {
      alert("비밀번호는 영문 숫자 조합 6자리 이상으로 입력해주세요");
      return;
    }
    if (state.userPassword !== state.passwordCheck) {
      alert("비밀번호가 다릅니다. 다시 확인해주세요");
      return;
    }
    if (
      state.userEmail !== "" &&
      state.userNickname !== "" &&
      state.userPassword !== "" &&
      state.passwordCheck !== ""
    ) {
      dispatch(userActions.signupFB(state));
    }
  };

  return (
    <>
      {is_loading && <Spinner />}
      <Grid
        width="30vw"
        height="520px"
        margin="12vh auto"
        padding="40px 50px"
        bg="#f1f3f5"
      >
        <h1>회원가입</h1>
        <Grid margin="20px 0 0 0">
          <Label>이메일</Label>
          <Grid is_flex>
            <Input
              name="userEmail"
              value={state.userEmail}
              _onChange={onChange}
              placeholder="이메일 주소를 입력해주세요."
            />
          </Grid>
        </Grid>
        <Grid margin="10px 0 0 0">
          <Label>닉네임</Label>
          <Input
            name="userNickname"
            value={state.userNickname}
            _onChange={onChange}
            placeholder="닉네임을 입력해주세요."
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
        <Grid margin="10px 0 0 0">
          <Label>비밀번호 확인</Label>
          <Input
            name="passwordCheck"
            value={state.passwordCheck}
            _onChange={onChange}
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
        </Grid>
        <Grid margin="20px 0 0 0">
          <Button type="blue" _onClick={onClick}>
            회원가입
          </Button>
        </Grid>
        <Grid margin="20px 0 0 0">
          <Button type="white" _onClick={() => history.push("/")}>
            메인으로가기
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
