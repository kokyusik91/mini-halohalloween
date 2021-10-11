import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/signup" exact component={Signup} />
    </BrowserRouter>
  );
}

export default App;
