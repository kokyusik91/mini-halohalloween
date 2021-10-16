import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { Grid, Container } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Hedaer = (props) => {
  const dispatch = useDispatch();
  // const is_user = useSelector((state) => state.user.user);
  const is_login = useSelector((state) => state.user.is_login);
  const logout = () => {
    dispatch(userActions.logOutFB());
  };
  React.useEffect(() => {
    dispatch(userActions.setUserFB());
  }, []);
  return (
    <Grid width="100%" padding="25px 0" bg="#6e3845">
      <Container>
        <Grid is_flex is_header>
          <Logo onClick={() => history.push("/")}>halohalloween</Logo>
          <Grid is_flex is_header flex margin="0 0 0 20px">
            <HeaderLink onClick={() => history.push("/about")}>
              할로윈소개
            </HeaderLink>
            <HeaderLink onClick={() => history.push("/postlist")}>
              포스팅
            </HeaderLink>
            <HeaderLink onClick={() => history.push("/contactus")}>
              Contact us
            </HeaderLink>
          </Grid>
          <Grid is_header>
            {!is_login ? (
              <>
                <HeaderLink onClick={() => history.push("/login")}>
                  로그인
                </HeaderLink>
                <HeaderLink onClick={() => history.push("/signup")}>
                  회원가입
                </HeaderLink>
              </>
            ) : (
              <HeaderLink onClick={logout}>로그아웃</HeaderLink>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

const HeaderLink = styled.button`
  padding: ${(props) => (props.is_title ? "0" : "0 20px")};
  font-size: ${(props) => (props.is_title ? "20px" : "14px")};
  color: #fff;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    color: #cd7f4f;
  }
  :last-child {
    padding: 0px 0px 0px 10px;
  }
  @media ${({ theme }) => theme.tablet} {
    padding: 0 10px;
    font-size: 11px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0 5px;
  }
  @media ${({ theme }) => theme.mobileS} {
    font-size: 10px;
  }
`;
const Logo = styled.button`
  padding: 0;
  font-size: 20px;
  color: #fff;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    color: #cd7f4f;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 17px;
  }
  @media ${({ theme }) => theme.mobileS} {
    font-size: 14px;
  }
`;

export default Hedaer;
