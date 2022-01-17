import React from 'react'
import '../Styles/MainPage.css'
import { FaChevronCircleDown} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { Link } from "react-scroll";

function MainPage() {
    const variants = {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      },
    };

    const item={
      hidden:{
        opacity:0,
        x:-100,
      },
      show:{
        opacity:1,
        x:0,
        transition:{
          duration:0.8,
        },
      },
    };
    return (
      <div className="mainPage" id="home">
        <motion.div className="Intro"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item}>Hello!</motion.h1>
          <motion.h2 variants={item}>
            I'm <span>Sarthak Pant</span>,<br />
            Welcome to my Portfolio
          </motion.h2>
          <motion.p variants={item}>Front-End/Back-End/Machine Learning</motion.p>
        </motion.div>
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
