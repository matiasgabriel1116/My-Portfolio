import React from "react";
// import GitHubCalendar from 'react-github-calendar';
import GitGraph from "./Graph.png";
import "./About.css";
import Skills from "./Skills.js";

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Matias Gabriel Oviedo.</h4>
            <p>
            I am a Passionate Full Stack Developer, Web Designer, Mobile App Developer, and AI Enthusiast.
            </p>
            <p>
              I love crafting innovative solutions, designing intuitive user experiences, 
              and turning ideas into reality with code. Solving problems and creating functional, 
              visually appealing applications is what excites me. I am always eager to learn new skills 
              and explore emerging technologies—there’s no limit to growth!

              Outside of coding, I enjoy playing volleyball and staying active with other sports, 
              which keep me energized and focused.  
            </p>
            <p>
              For me, coding is a creative outlet where anything I imagine can come to life. If I can think it, I can build it.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
            I am a skilled programmer with a strong focus on both front-end and back-end development. 
            </p>
            <p>
            On the front-end, I specialize in JavaScript, utilizing popular frameworks such as ReactJS and NextJS to create dynamic, 
            responsive user experiences. I also enhance the visual appeal of web applications with CSS, 
            along with frameworks like Bootstrap and Tailwind when necessary.
            </p>
            <p>
            On the back-end, I work with JavaScript-based technologies, 
              including NodeJS, Express, and MongoDB, to build efficient and scalable server-side solutions.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a App Developer.</h4>
            <p>
            I am an experienced app developer, proficient in creating intuitive and visually engaging interfaces. 
            I am highly skilled with Adobe products such as Photoshop, Illustrator, InDesign, Lightroom, and XD, 
            all of which are considered industry standards. I am also well-versed in alternative 
            design tools like Gimp, Inkscape, and Figma, which I use to create impactful designs across various platforms.
            </p>
            <p>
            My expertise spans user interface design, branding, brochures, 
            and print materials—creating visually compelling experiences is a central aspect of my work.
            </p>
          </div>
        </article>

        <div>
          <div className="title">
            <h3>Tech Stack</h3>
            <p className="separator" />

            <div className="descTechS full">
              {/* <p>
                <div>
                  <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" />
                </div>
              </p> */}
              <div className="TechContainer">
                <a href="https://www.mongodb.com" target="_blank">
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="Mongodb"
                  />
                </a>
                <a href="https://expressjs.com" target="_blank">
                  {" "}
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express js"
                  />
                </a>
                <a href="https://react.dev" target="_blank">
                  {" "}
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=react"
                    alt="React js"
                  />
                </a>
                <a href="https://nodejs.org/en" target="_blank">
                  {" "}
                  <img
                    className="Techs"
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node js"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="title">
            <div className="SkillsMargin">
              <h3>Skills</h3>
            </div>
            <p className="separatorSkills" />
          </div>
          <Skills />
        </div>

<div className="title" style={{marginTop:"30px"}}>
<h3>GitHub Contributions</h3>
<p className="separatorGithub" />
</div>

        <div className="graph-container">
          <a href="https://github.com/matiasgabriel1116 " target="_blank">
            <img className="GraphImg" src={GitGraph} alt="Graph" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
