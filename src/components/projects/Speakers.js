import React from "react";
import "../../styles/pages/projects.scss";


export default function Speakers() {
  return (
    <div className="gray-bg">
      <div className="container pb-5">
        <div className="section-header"  style={{marginTop: "5%"}}>
          <h1>Speaker Series</h1>
        </div>
        <div className="row justify-content-center text-center">


            <div className="card">
            <img src={require("../../assets/Projects/speakers/JohnCaserta.png")} alt="location" style={{width:"100%"}}></img>
            <div className="container">
                <h4><b>John Caserta</b></h4>
                <a
                        href="https://www.risd.edu/people/john-caserta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>
            
            <div className="card">
            <img src={require("../../assets/Projects/speakers/MarieOtsuka.png")} alt="location" style={{width:"100%"}}></img>
            <div className="container">
                <h4><b>Marie Otsuka</b></h4>
                <a
                        href="https://www.risd.edu/people/marie-otsuka/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>

            <div className="card">
            <img src={require("../../assets/Projects/speakers/GregBrown.png")} alt="location" style={{width:"100%"}}></img>
            <div className="container">
                <h4><b>Greg Brown</b></h4>
                <a
                        href="https://www.writerstrust.com/authors/greg-brown/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>

            <div className="card">
            <img src={require("../../assets/Projects/speakers/JeffMartin.png")} alt="location" style={{width:"100%"}}></img>
            <div className="container">
                <h4><b>Jeff Martin</b></h4>
                <a
                        href="https://www.theyoungwriters.org/artists/jeff-martin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>

            <div className="card">
            <img src={require("../../assets/Projects/speakers/RyanWilliams.png")} alt="location" style={{width:"100%"}}></img>
            <div className="container">
                <h4><b>Ryan Williams</b></h4>
                <a
                        href="https://www.saatchiart.com/Xintalene"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>

        </div>
        
      </div>
    </div>
  );
}
