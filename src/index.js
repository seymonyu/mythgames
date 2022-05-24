import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Home from './components/home/Home'
import Games from './components/games/Games'
import Contact from './components/contact/Contact'

const Routing = () => {
  return(
    <Router>
      <Routes>
      <Route path="/" exact component={Home} />
        <Route path="/games" exact component={Games} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Routes>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);