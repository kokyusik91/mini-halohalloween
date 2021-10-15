import React from 'react';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
// import { emailCheck, passwordCheck } from "../shared/regExp";
import { Grid, Label, Input, Button, Text } from '../elements';
import Spinner from '../shared/Spinner';

const Login = (props) => {
  const dispatch = useDispatch();
  const is_loading = useSelector((state) => state.user.is_loading);

  const [state, setState] = React.useState({ userEmail: '', userPassword: '' });
  const [disabled, setDisabled] = React.useState(true);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onClick = () => {
    if (state.userEmail === '') {
      alert('이메일 주소를 입력해주세요');
      return;
    }
    if (state.userPassword === '') {
      alert('비밀번호를 입력해주세요');
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
    if (state.userEmail !== '' && state.userPassword !== '') {
      dispatch(userActions.loginFB(state));
    }
  };

  // 지영 멘토님 답변 useEffect에서 disabled를 관리한다.
  React.useEffect(() => {
    if (state.userEmail !== '' && state.userPassword !== '') {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [state]);
  return (
    <>
      {is_loading && <Spinner />}
      <Grid
        width='30vw'
        height='390px'
        margin='20vh auto'
        padding='40px 50px'
        bg='#f1f3f5'
      >
        <Text size='24px' bold>
          로그인
        </Text>
        <Grid margin='20px 0 0 0'>
          <Label>이메일</Label>
          <Input
            name='userEmail'
            value={state.userEmail}
            _onChange={onChange}
            _onSubmit={onClick}
            placeholder='이메일 주소를 입력해주세요.'
          />
        </Grid>
        <Grid margin='10px 0 0 0'>
          <Label>비밀번호</Label>
          <Input
            name='userPassword'
            value={state.userPassword}
            type='password'
            _onChange={onChange}
            _onSubmit={onClick}
            placeholder='비밀번호를 입력해주세요.'
          />
        </Grid>
        <Grid margin='20px 0 0 0'>
          <Button type='blue' disabled={disabled} _onClick={onClick}>
            로그인
          </Button>
        </Grid>
        <Grid margin='20px 0 0 0'>
          <Button type='white' _onClick={() => history.push('/signup')}>
            회원가입
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
