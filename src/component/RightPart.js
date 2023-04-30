import React from 'react'
import {
  FaDatabase,
  FaJs,
  FaLaptopCode,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTwitter,
} from "react-icons/fa";

function RightPart() {
    return (
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
    );
}

export {RightPart}
