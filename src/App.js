import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import { Route } from "react-router-dom";
import Hedaer from "./components/Header";
import Footer from "./components/Footer";
import Comment from "./components/Comment";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Postlist from "./pages/Postlist";

function App() {
  const pathname = history.location.pathname;
  return (
    <ConnectedRouter history={history}>
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
          <Route path="/comment" component={Comment} />
          <Footer />
        </>
      )}
    </ConnectedRouter>
  );
}

export default App;
