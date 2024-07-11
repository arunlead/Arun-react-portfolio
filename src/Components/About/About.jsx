import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
// import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks} from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hey, I am <span className="about__name">Arun</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate about web development, I specialize in creating intuitive digital solutions and enhancing user experiences. With a background in Frontend transitioning to Full Stack, I've successfully delivered multiple projects aimed at boosting productivity and efficiency. My work reflects a commitment to innovation and problem-solving in the digital realm. Let's connect and explore how we can shape the future through technologys
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/arunlead"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:aruntechworld123@gmail.com.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+91-9361411474"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-arun-623547258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"s
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/ArunAru56884321?s=09"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1cV3jp3qN3IUadk3ktx9gNhfbc0_rYF99/view?usp=drivesdk"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
