import React,{useState,useEffect} from "react";
import { FaGithubAlt } from "react-icons/fa";
import "../Styles/MyWork.css";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'
import { Work } from "./Work";
import {useAnimation} from 'framer-motion'

function MyWork() {
 
  const { ref, inView } = useInView({threshold:0.3});
  const animation = useAnimation();
  const [pass,setPass] =useState(false);

  useEffect(() => {
    if (inView) {
      setPass(true);
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView && !pass) {
      animation.start({
        y: "100vh",
      });
    }

    console.log(inView);
  }, [inView]);

  return (
    <>
      <div ref={ref} className="myWork" id="work">
        <div className="head">
          <div>
            <h1>Some of my work</h1>
            <hr />
          </div>
        </div>
        <motion.div animate={animation} className="mainWork">
          {Work &&
            Work.map((Pro) => (
              <div className="card" key={Pro.id}>
                <img src={Pro.picurl} className="image" />
                <div className="card__inner">
                  <h2>{Pro.Name}</h2>
                  <p>{Pro.Desc}</p>
                  <a href={Pro.prourl} target='_blank'>
                    <i>
                      <FaGithubAlt />
                    </i>
                  </a>
                </div>
              </div>
            ))}
        </motion.div>
        <a href="https://github.com/sarthakpant772" target='_blank'>
          <div className="otherWork">
            <p>Check Other Work</p>
          </div>
        </a>
      </div>
    </>
  );
}

export { MyWork };
