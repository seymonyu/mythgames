import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
