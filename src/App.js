import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Games from "./components/games/Games";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/games" exact component={Games} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
