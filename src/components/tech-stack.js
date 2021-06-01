import React, { useEffect } from "react";

import ApolloLogo from "../assets/images/logo-apollo.jpg";
import Cloudinary from "../assets/images/cloudinary.png";
import ExpressLogo from "../assets/images/logo-express.png";
import MaterialLogo from "../assets/images/material.svg";
import MongoLogo from "../assets/images/logo-mongo.png";
import NextLogo from "../assets/images/logo-next.png";
import NodeLogo from "../assets/images/logo-node.png";
import ReactLogo from "../assets/images/logo-react.png";
import SassLogo from "../assets/images/logo-sass.png";
import StyledLogo from "../assets/images/logo-styled.jpg";
import TailwindLogo from "../assets/images/logo-tailwind.png";
import { ToolTip } from "./tool-tip";

const techMap = {
  "Apollo GraphQL": ApolloLogo,
  Cloudinary: Cloudinary,
  Express: ExpressLogo,
  NextJS: NextLogo,
  NodeJS: NodeLogo,
  ReactJS: ReactLogo,
  "Styled-Components": StyledLogo,
  MongoDB: MongoLogo,
  Sass: SassLogo,
  MaterialUI: MaterialLogo,
  TailwindCSS: TailwindLogo,
};

const TechIcon = ({ tech }) => (
  <div className={`tech__icon`}>
    <ToolTip text={tech} />
    <img src={techMap[tech]} alt="tech-stack logo" />
  </div>
);

export const TechStack = ({ tech, right }) => {
  // onhover dynamic text
  useEffect(() => {
    [...document.getElementsByClassName("tech__icon")].map((x, i) => {
      x.addEventListener("mouseenter", () => {});
      return () => {
        // document.removeEventListener("mouseover", () => null)
      };
    });
  });

  return (
    <div className={`tech + ${right ? " tech--right" : ""}`}>
      {tech.map((x, i) => {
        return (
          <div key={i}>
            <div>
              <TechIcon tech={x} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
