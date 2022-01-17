import React,{useEffect,useState} from "react";
import "../Styles/AboutMe.css";
import { motion } from "framer-motion";
import { RightPart } from "./RightPart";
import { useInView } from "react-intersection-observer";
import {useAnimation} from 'framer-motion'
function AboutMe() {

  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animationImg = useAnimation();

  const [pass,setPass] = useState(false)
  useEffect(()=>{
    console.log(inView);
    if (inView) {
      setPass(true)
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      animationImg.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });

    }
    if (!inView && !pass) {
      animation.start({
        x: "-100vh",
      });
      animationImg.start({
        x: "100vh",
      });
    }
  },[inView])
  return (
    <div className="aboutMe" id="aboutme">
      <div className="head">
        <div>
          <h1>About Me</h1>
          <hr />
        </div>
      </div>
      <div ref={ref} className="lowerAbout">
        
        <div className="centerPart">
          <motion.div animate={animation} className="text">
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
          </motion.div>
          <motion.div animate={animationImg} className="aboutMeImage">
            <img src="https://brave-montalcini-c90832.netlify.app/image/me.jpeg" />
          </motion.div>
        </div>
        <RightPart/>
      </div>
    </div>
  );
}

export { AboutMe };
