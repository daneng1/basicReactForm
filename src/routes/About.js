import React from "react";
import "./About.css";
// import { Link } from "react-router-dom";
import NavBar from "../Navbar";
import Particles from "react-tsparticles";

export default function About () {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="main">
      <div className="App">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 60,
              background: {
                color: "#0b032d",
              },
              backgroundMode: {
                enable: true,
              },
              particles: {
                color: {
                  value: ["#f67e7d", "#843b62", "#621940"],
                },
                links: {
                  color: "#ffb997",
                  enable: true,
                },
                move: {
                  enable: true,
                  speed: 3,
                },
                size: {
                  value: 5,
                  random: {
                    enable: true,
                    minimumValue: 1,
                  },
                  animation: {
                    enable: true,
                    speed: 6,
                    minimumValue: 1,
                  },
                },
                opacity: {
                  value: 0.8,
                  random: {
                    enable: true,
                    minimumValue: 0.4,
                  },
                },
              },
            }}
          />
          </div>
      <NavBar/>
      <p>Hello</p>
    </div>
  )
}