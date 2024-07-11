import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/arun5.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Arun</span> and I am from{" "}
                <span className="different">
                  {" "}
                  vellore, tamilnadu (India)
                </span>
                . Currently persuing my B.E 3rd year 
                from{" "}
                <span className="different">
                  AALIM MUHAMMED SALEGH COLLEGE OF ENGINEERING(AMSCE)
                </span>
                .My journey began at  in Vellore{" "}
                <span className="different">Government Higher Secondary School</span> designing,entrepreneurship and an open-source contributor.
              </h4>
              <h4>Terms That describes me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Developer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Designer{" "}
              </h4>
              
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Blogger{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
