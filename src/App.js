import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
