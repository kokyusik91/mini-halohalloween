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

function App() {
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
      {pathname !== "login" && pathname !== "signup" && <Hedaer />}
      <Switch>
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
