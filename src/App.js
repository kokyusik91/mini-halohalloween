import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import { Route, Switch } from "react-router-dom";
import Hedaer from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Postlist from "./pages/Postlist";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
// import CommentList from "./pages/CommentList";
import CommentListTest from "./pages/CommentListTest";
import NotFound from "./pages/NotFound";
import Spinner from "./shared/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "./redux/modules/user";
import styled, { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  const dispatch = useDispatch();
  const is_loading = useSelector((state) => state.user.is_loading);
  console.log("history = ", history);
  // ## 이슈 로그인, 회원가입 페이지는 header , footer 컴포넌트가 보여지면 안된다.
  // header, footer가 보여지는 컴포넌트에서 로그인 혹은 회원가입 컴포넌트로 이동후
  // 브라우저 뒤로가기 버튼을 클릭하면 hader, footer가 보여야 하는 컴포넌트임에도
  // 안보이는 이슈가 발생함. 이 문제는 router의 history로 해결해보려고 합니다.

  React.useEffect(() => {
    return history.listen((location) => {
      dispatch(userActions.isloading(true));
      history.replace("/");
      // dispatch(userActions.isloading(false));
      setTimeout(() => {
        dispatch(userActions.isloading(false));
      }, 2000);
    });
  }, [history]);

  // 1. url 주소를 자른다.
  // history.location.pathname 으로 변수를 담으면 (" /login") <- 앞에 빈 공백이 생기기 때문에
  // 2. istory.location.pathname.split("/") / 기준으로 자른다.
  // 3. 내가 원하는 login 또는 signup은 split 잘랐을때 무조건 맨 뒤로 온다.
  // 만약에 url 뒤에 뭔가가 붙는 주소도 header 분기 처리가 필요할 경우를 대비해서 (없을수도 있지만)
  // 배열의 순서를 무조건 맨 첫번째로 오도록 reverse()로 돌린다.
  // 첫번째 배열을 pathname 변수에 담아서 조건처리를 해준다.
  const pathname = history.location.pathname.split("/").reverse()[0];
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        {pathname !== "login" && pathname !== "signup" && <Hedaer />}
        <Switch>
          {is_loading && <Spinner />}
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Main} />
          <Route path="/postlist" exact component={Postlist} />
          <Route path="/about" exact component={About} />
          <Route path="/contactus" exact component={ContactUs} />
          {/* <Route path="/commentlist" component={CommentList} /> */}
          <Route path="/commentlist" component={CommentListTest} />
          <Route component={NotFound} />
        </Switch>
        {pathname !== "login" && pathname !== "signup" && <Footer />}
      </ThemeProvider>
    </ConnectedRouter>
  );
}

export default App;

// ## 이러면 안됩니다!
{
  /* <Switch>
{pathname === "/login" || pathname === "/signup" ? (
  <>
    <Route path="/signup" exact component={Signup} />
    <Route path="/login" exact component={Login} />
  </>
) : (
  <>
    <Hedaer />
    <Route path="/" exact component={Main} />
    <Route path="/postlist" exact component={Postlist} />
    <Route path="/about" exact component={About} />
    <Route path="/contactus" exact component={ContactUs} />
    <Route path="/commentlist" component={Commentlist} />
     <Route component={NotFound} />
    <Footer />
  </>
)}
</Switch>  */
}
