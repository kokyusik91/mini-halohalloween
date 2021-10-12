import { BrowserRouter, Route } from "react-router-dom";
import Hedaer from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Comment from "./pages/Comment";

function App() {
  return (
    <BrowserRouter>
      <Hedaer />
      <Route path="/" exact component={Main} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/comment" exact component={Comment} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
