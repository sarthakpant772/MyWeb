import React from 'react'
import { FaGithubAlt, FaHackerrank, FaTwitter } from 'react-icons/fa';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AboutMe } from './component/AboutMe';
import { Footer } from './component/Footer';
import { MainPage } from './component/MainPage';

import { MyWork } from './component/MyWork';
import { NavBar } from './component/NavBar';

function App() {
  return (
    <div className="App">
      <div className="leftPart">
        <div className="fonts">
          <i>
            <FaGithubAlt />
          </i>
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaHackerrank />
          </i>
        </div>
        <div className="vl"></div>
      </div>
     
      <NavBar />
      <MainPage/>
      <AboutMe/>
      <MyWork/>
      <Footer />
    </div>
  );
}

export default App;
