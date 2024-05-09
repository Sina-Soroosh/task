import logo from "./logo.svg";
import "./App.css";
import Header from "./components/modules/Header/Header";
import Main from "./components/templates/Main/Main";
import Slider from "./components/templates/Slider/Slider";
import Navigation from "./components/modules/Navigation/Navigation";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Slider />
      <Navigation />
    </>
  );
}

export default App;
