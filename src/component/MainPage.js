import React from 'react'
import '../Styles/MainPage.css'
import { FaChevronCircleDown} from 'react-icons/fa'

import { Link } from "react-scroll";

function MainPage() {
    return (
      <div className="mainPage" id="home">
        <div className="Intro">
          <h1>Hello!</h1>
          <h2>
            I'm <span>Sarthak Pant</span>,<br />
            Welcome to my Portfolio
          </h2>
          <p>Front-End/Back-End/Machine Learning</p>
        </div>
        <div className="scroolDown bounce">
          <i>
            <Link to="aboutme" smooth={true} duration={1000}>
              <FaChevronCircleDown />
            </Link>
          </i>
        </div>
      </div>
    );
}

export {MainPage}
