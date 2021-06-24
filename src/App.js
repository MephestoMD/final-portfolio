import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
