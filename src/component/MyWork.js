import React,{useState} from "react";
import { FaGithubAlt } from "react-icons/fa";
import "../Styles/MyWork.css";
import { Work } from "./Work";
function MyWork() {
 
  return (
    <>
      <div className="myWork" id="work">
        <div className="head">
          <div>
            <h1>Some of my work</h1>
            <hr />
          </div>
          {console.log(Work)}
        </div>
        <div className="mainWork">
          {Work &&
            Work.map((Pro) => (
              <div className="card" key={Pro.id}>
                <img src={Pro.picurl} />
                <div className="card__inner">
                  <h2>{Pro.Name}</h2>
                  <p>{Pro.Desc}</p>
                  <a href={Pro.prourl}>
                    <i>
                      <FaGithubAlt />
                    </i>
                  </a>
                </div>
              </div>
            ))}
        </div>

        <div className="otherWork">
          <p>Check Other Work</p>
        </div>
      </div>
    </>
  );
}

export { MyWork };
