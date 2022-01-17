import React from "react";
import { FaDatabase, FaGithubAlt, FaHackerrank, FaJs, FaLaptopCode, FaNodeJs, FaPython, FaReact, FaTwitter } from "react-icons/fa";
import "../Styles/AboutMe.css";
function AboutMe() {
  return (
    <div className="aboutMe" id="aboutme">
      <div className="head">
        <div>
          <h1>About Me</h1>
          <hr />
        </div>
      </div>
      <div className="lowerAbout">
        
        <div className="centerPart">
          <div className="text">
            <p>
              I'm a Noida-based software engineer who specilizes in building and
              designing exceptional digotal experience.Currently, I'm an
              engineering student at JIIT focused on building, human-centered
              products.
            </p>
            <br />
            <p>
              I have resently have taken{" "}
              <span href="#">session on Git/Github</span>. Telling about the use
              of git and github and also introducing them to the world of open
              source.
            </p>
            <div className="tech">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
              <ul>
                <li>Django</li>
                <li>Machine Learning</li>
                <li>C/C++</li>
              </ul>
            </div>
            <div className="touch">
              <a>Get In Touch</a>
            </div>
          </div>
          <div className="aboutMeImage">
            <img src="https://brave-montalcini-c90832.netlify.app/image/me.jpeg" />
          </div>
        </div>
        <div className="rightPart">
          <i>
            <FaDatabase />
          </i>
          <i>
            <FaReact />
          </i>
          <i>
            <FaJs />
          </i>
          <i>
            <FaPython />
          </i>
          <i>
            <FaNodeJs />
          </i>
          <i>
            <FaLaptopCode />
          </i>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
