import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hedaer from "./components/Header";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Hedaer />
      <Route path="/" exact component={Main} />
      <Route path="/signup" exact component={Signup} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
