<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
import Hedaer from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Postlist from './pages/Postlist';
=======
import { BrowserRouter, Route } from "react-router-dom";
import Hedaer from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

>>>>>>> 10f5c273372e86cfdc73596eac470ffb2789aedf
function App() {
  return (
    <BrowserRouter>
      <Hedaer />
      <Route path='/' exact component={Main} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/login' exact component={Login} />
      <Route path='/postlist' exact component={Postlist} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
