import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledNavBar from "./components/NavBar";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <Router className="App">
      <StyledNavBar />
    </Router>
  );
}

export default App;
