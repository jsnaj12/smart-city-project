
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import Contact from "./pages/Contact";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
         <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Login' exact element={<Login/>}/>
          <Route path='/Services' exact element={<Services/> }/>
          <Route path='/Contact' exact element={<Contact/> }/>
         </Routes>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
