import React,{useState,useEffect} from 'react'
import '../Styles/NavBar.css'
import { animateScroll as AScroll } from 'react-scroll/modules';
import { Link } from "react-scroll";
import {FaBars, FaLessThanEqual} from 'react-icons/fa'
function NavBar() {
    const [check,setCheck]=useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      
      const changeWidth= ()=>{
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize',changeWidth)
    }, [])

    return (
      <div className="navBar">
        <div
          className="logo"
          onClick={() => {
            AScroll.scrollToTop();
          }}
        >
          <p>Sarthak</p>
        </div>
        {(check || screenWidth>900)&& (
          <div className="navBarList">
            <ul>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  onClick={() => setCheck(!check)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aboutme"
                  smooth={true}
                  duration={1000}
                  onClick={() => setCheck(!check)}
                >
                  About-Me
                </Link>
              </li>
              <li>
                <Link
                  to="work"
                  smooth={true}
                  duration={1000}
                  onClick={() => setCheck(!check)}
                >
                  My-Work
                </Link>
              </li>
              <li>
                <a
                  href="mailto:sarthak.pant31@gmail.com"
                  target='_blank'
                  smooth={true}
                  duration={1000}
                  onClick={() => setCheck(!check)}
                >
                  Hire-me
                </a>
              </li>
            </ul>
          </div>
        )}

        <i onClick={() => setCheck(!check)} className='bars'>
          <FaBars />
        </i>
      </div>
    );
}

export  {NavBar}
