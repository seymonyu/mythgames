import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Games from "./components/games/Games";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import { Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/games" exact component={Games} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
