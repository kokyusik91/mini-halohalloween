import React from "react";
import { withRouter } from "react-router";
import { history } from "../redux/configureStore";
import { Grid, Container, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Hedaer = (props) => {
  const dispatch = useDispatch();
  const is_user = useSelector((state) => state.user.user);
  const is_login = useSelector((state) => state.user.is_login);
  console.log("is_user == ", is_user);
  console.log("is_login == ", is_login);
  const logout = () => {
    dispatch(userActions.logOutFB());
  };
  React.useEffect(() => {
    dispatch(userActions.setUserFB());
  }, []);
  return (
    <Grid width="100%" padding="25px 0" bg="hsl(346deg 33% 33%)">
      <Container>
        <Grid is_flex>
          <Button
            fontSize="26px"
            color="#fff"
            _onClick={() => history.push("/")}
          >
            halohalloween
          </Button>
          <Grid is_flex flex margin="0 0 0 20px">
            <Button
              padding="0px 20px"
              color="#f8f9fa"
              _onClick={() => history.push("/about")}
            >
              할로윈소개
            </Button>
            <Button
              padding="0px 20px"
              color="#f8f9fa"
              _onClick={() => history.push("/postlist")}
            >
              포스팅
            </Button>
            <Button
              padding="0px 20px"
              color="#f8f9fa"
              _onClick={() => history.push("/contactus")}
            >
              Contact us
            </Button>
          </Grid>
          <Grid>
            {!is_login ? (
              <>
                <Button
                  padding="0px 20px"
                  color="#f8f9fa"
                  _onClick={() => history.push("/login")}
                >
                  로그인
                </Button>
                <Button
                  padding="0px 20px"
                  color="#f8f9fa"
                  _onClick={() => history.push("/signup")}
                >
                  회원가입
                </Button>
              </>
            ) : (
              <Button padding="0 0 0 20px" color="#f8f9fa" _onClick={logout}>
                로그아웃
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Hedaer;
