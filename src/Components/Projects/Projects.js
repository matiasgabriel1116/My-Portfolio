import React from 'react';
import Project from './Project';
import './Projects.css';
import LungCancerML from './Images/Healthcare.png'
import SolarSystem from './Images/Solar.png'
import TextUtils from './Images/TextUtils.png'
import Rentalhub from './Images/Rental hub .jpg';
import FreshFruitHub  from './Images/Fresh Fruit Hub .png';
import AutoRentify  from './Images/AutoRentify.png';
import HosPitEase from './Images/Hospital SS.png';
import AutoFixer from './Images/AutoFixer.png';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working .
          </p>
        </div>
        <div className="projects-wrapper">
         

        <Project
            title="LungCancerML"
            img={LungCancerML}
            tech="js"
            link="https://github.com/matiasgabriel1116/LungCancerML"
            repo="https://github.com/matiasgabriel1116/LungCancerML"
          >
            <small>
              Python Machine Learning project in Google Colab
            </small>
            <p style={{textAlign: "justify"}}>
            This project offers visualizations of healthcare data and machine learning models, simplifying complex information for analysis. It covers various techniques to explore the dataset and evaluate model performance, focusing on comparing classification algorithms applied to the Lung Cancer Dataset.
            </p>
          </Project>

          <Project
            title="Solar-System"
            img={SolarSystem}
            tech="react"
            link="https://github.com/matiasgabriel1116/Solar-System"
            repo="https://github.com/matiasgabriel1116/Solar-System"
          >
            <small>
              Built using React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
              As part of my learning journey with Three.js, I created an animated solar system that brings the wonders of astronomy to life. This project serves as both a practical application of the skills I've acquired and a captivating visual experience that showcases the dynamics of our solar system.
            </p>
          </Project>

          <Project
            title="TextUtils"
            img={TextUtils}
            tech="react"
            link="https://github.com/matiasgabriel1116/My-React-App"
            repo="https://github.com/matiasgabriel1116/My-React-App"
          >
            <small>
              Built using React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
              TextUtils is a React-based web app that simplifies text management tasks, offering features like word and character counters, space removal, and a text-to-speech speaker. It's an intuitive tool for enhancing productivity and improving text clarity.
            </p>
          </Project>

          <Project
            title="FreshFruitHub"
            img={FreshFruitHub}
            tech="js css react node"
            link="https://github.com/matiasgabriel1116/Fruit-hub"
            repo="https://github.com/matiasgabriel1116/Fruit-hub"
          >
            <small>
              Built using React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
            "Fresh Fruit Hub, a dynamic React-based single-page application, invites you to savor the essence of nature's bounty.As the developer, I've fused aesthetics with functionality to create a modern and engaging virtual orchard. 
            </p>
          </Project>

          <Project
            title="Car selling Website"
            img={Rentalhub}
            tech="js css react node"
            link="https://github.com/matiasgabriel1116/AutoDreams"
            repo="https://github.com/matiasgabriel1116/AutoDreams"
          >
            <small>
              Built using Node React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
            AutoDreams is more than just a website; it's a digital gateway to automotive enthusiasts' dreams. This project was born out of my love for both technology and cars, and I channeled that passion into every aspect of its creation.
            </p>
          </Project>

          
          <Project
            title="Car Renting Website"
            img={AutoRentify}
            tech="js css react"
            link="https://github.com/matiasgabriel1116/AutoRentify"
            repo="https://github.com/matiasgabriel1116/AutoRentify"
          >
            <small>
              Built CSS + Bootstarp, React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
            AutoRentify, a sleek and efficient car renting website designed and developed as a single-page application using React. With Rentify, we've redefined the car rental experience, offering a seamless and user-friendly interface that ensures a hassle-free process from start to finish.
            </p>
          </Project>

          <Project
            title="HospitEase"
            img={HosPitEase}
            tech="js css react"
            link="https://github.com/matiasgabriel1116/HospitEase"
            repo="https://github.com/matiasgabriel1116/HospitEase"
          >
            <small>
              Built CSS + Bootstarp, React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
              HospitEase is a sophisticated hospital management website crafted to elevate the administration of healthcare facilities. Utilizing React and Vite, this frontend application delivers a high-performance, user-centric experience, designed for both medical staff and administrative teams.
            </p>
          </Project>

          <Project
            title="AutoFixer"
            img={AutoFixer}
            tech="js css react"
            link="https://github.com/matiasgabriel1116/AutoFixer"
            repo="https://github.com/matiasgabriel1116/AutoFixer"
          >
            <small>
              Built CSS + Bootstarp, React.js and React Router.
            </small>
            <p style={{textAlign: "justify"}}>
              AutoFixer is an innovative website designed to streamline car service operations and enhance customer interactions. Built with React and Bootstrap, CarServ offers a dynamic and responsive user interface that simplifies the car servicing process for both customers and service providers.
            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;


