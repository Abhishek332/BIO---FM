import "./App.css";
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Main from "./components/Main/Main";
import { useState, createContext } from "react";

export const APIContext = createContext();

function App() {
  const [main, setMain] = useState("false");
  const [toggle, setToggle] = useState({"display" : "none"});

  return (
    <APIContext.Provider value={{ main, setMain, toggle, setToggle }}>
      <div className="app">
        <Main />
        <Header />
        <Content />
        <Footer />
      </div>
    </APIContext.Provider>
  );
}

export default App;
