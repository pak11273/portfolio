import "./assets/scss/index.scss";

import { ProjectLeft, ProjectRight } from "./components";
import React, { useEffect } from "react";
import { isPartiallyVisible, scrollTo } from "./assets/js/utilities";

import { Link } from "react-router-dom";
import git from "./assets/images/github-logo.png";
import linkedIn from "./assets/images/pngwave.png";
import portrait from "./assets/images/SELF.svg";
import stacked from "./assets/images/stacked-logo.png";
import youtube from "./assets/images/logo-youtube.png";

function App() {
  var isScrolling = false;

  function ScrollToTop(e) {
    if (window.scrollY > 100) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
  }

  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    const animateLeft = document.querySelectorAll(".animate--left");
    const animateRight = document.querySelectorAll(".animate--right");

    function animationScrolling(e) {
      for (var i = 0; i < projects.length; i++) {
        var listItemLeft = animateLeft[i];
        var listItemRight = animateRight[i];

        if (isPartiallyVisible(projects[i])) {
          listItemLeft.classList.add("active");
          listItemRight.classList.add("active");
        } else {
          listItemLeft.classList.remove("active");
          listItemRight.classList.remove("active");
        }
      }
    }

    function throttleScroll(e) {
      if (isScrolling === false) {
        window.requestAnimationFrame(function () {
          ScrollToTop(e);
          animationScrolling(e);
          isScrolling = false;
          animationScrolling(e);
        });
      }
      isScrolling = true;
    }
    document.addEventListener("scroll", throttleScroll, false);
    return document.removeEventListener("scroll", () => null);
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById("container");
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();
    const offset = elemRect.top - bodyRect.top;
    // return window.scrollTo(0, 0)
    scrollTo(offset, null, 2000);
  };

  return (
    <div id="container" className="overflow-hidden">
      <div id="scrollToTop" onClick={() => scrollToTop()}>
        <svg
          className="scrollToTop__icon"
          viewBox="0 0 21.879 21.879"
          height="82.691"
          width="82.691"
        >
          <path fill="none" d="M15.093 10.603h3.976V27.91h-3.976z" />
          <path fill="none" d="M16.195 6.961h4.61v7.818h-4.61z" />
          <g transform="translate(-27.992 -244.483)">
            <circle
              cx="38.932"
              cy="255.423"
              fill="none"
              stroke="#fffffa"
              strokeWidth="1.058"
              r="10.41"
            />
            <path
              d="M38.403 248.808l-3.625 6.278.916.53 2.709-4.692v11.114h1.058v-11.114l2.708 4.691.917-.529-3.625-6.278z"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <nav>
        <div className="nav center-xs">
          <div className="main__menu col-xs-10">
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <a
                href="https://www.youtube.com/user/pak11273/videos?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30px"
                  height="30px"
                  src={youtube}
                  alt="youtube icon"
                />
              </a>
            </div>
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <a
                href="https://github.com/pak11273"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="30px" height="30px" src={git} alt="git icon" />
              </a>
            </div>
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <a
                href="https://www.linkedin.com/in/isaac-pak-78b72687/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30px"
                  height="30px"
                  src={linkedIn}
                  alt="linkedIn icon"
                />
              </a>
            </div>
            <div className="main__menu__item main__menu__item--padding scale-in-center main__menu__item--hover delay-3">
              <a
                href="https://stackoverflow.com/users/1991020/isaac-pak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="37px" height="37px" src={stacked} alt="SO icon" />
              </a>
            </div>
            <div className="main__menu__item--padding scale-in-center main__menu__item--hover delay-4">
              <Link to="/cv" target="_blank" rel="noopener noreferrer">
                <p className="">cv</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="wrapper">
        <section className="section">
          <div className="masthead">
            <img src={portrait} className="vibrate-1" alt="self portrait" />
            <div className="masthead__text">
              <div className="puff-in-center-rider masthead__rider">
                <h5>fullStack</h5>
              </div>
              <div>
                <h2>Isaac Pak</h2>
                <h4>Web Developer</h4>
              </div>
              <div>
                <p>built with</p>
                <p>
                  <span className="masthead__text--hightlight">
                    create-react-app
                  </span>
                  <span> & </span>
                  <span className="masthead__text--hightlight">sass</span>
                </p>
                <p>
                  See the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/pak11273/portfolio"
                  >
                    source code
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <ProjectLeft
            img="bandg__image"
            title="Boys & Girls Club Experience Tracker"
            tech={["ReactJS", "Java", "Spring", "Postgres"]}
            website="https://b.bgexperiencetracker.dev/"
            source="https://github.com/Lambda-School-Labs/bg-emotion-tracker-fe"
            video="https://www.youtube.com/watch?v=k82mdWyWgxA"
          >
            This app trackes the member experience by retrieving feedback from
            members throught their Boys & Girls Club experience. The Boys &
            Girls Club now have a way to see how effective their programs are by
            the ones who should give it, the kids!
          </ProjectLeft>
        </section>
        <section className="section">
          <ProjectRight
            img="secret__image"
            title="Secret Family Recipes"
            tech={["ReactJS", "Redux", "Postgres", "NodeJS"]}
            website="https://secret-recipes-indol.vercel.app/"
            source="https://github.com/pak11273/secret-recipes"
          >
            That old family recipe book starting to look fragile? Use this app
            and keep those precious recipes preserved in the cloud. Your recipes
            are always backed up and secure so you'll never have to worry about
            losing them.
          </ProjectRight>
        </section>
        <section className="section">
          <ProjectLeft
            img="techstuff__image"
            title="Rent My Tech"
            tech={["ReactJS", "Redux", "Java", "Spring", "Postgres"]}
            website="https://techstuff-react-eygsmq063-pak11273.vercel.app/"
            source="https://github.com/Rent-My-Tech-Stuff/java"
          >
            Ever wanted to try out that new high tech gadget but couldn't afford
            it? Now you can just rent it out for cheap from local local renters
            or rent your own stuff and make some pocket money!
          </ProjectLeft>
        </section>
        <section className="section">
          <ProjectRight
            img="african__image"
            title="African Marketplace"
            tech={["ReactJS", "Sass", "NodeJS", "Express"]}
            source="https://github.com/pak11273/marketplace-fe"
            website="https://front-end-qgoeake9b-pak11273.vercel.app/"
          >
            Local farmer's market in Africa gain more sales by joining the
            cloud. Rural Africa can now see what products their local businesses
            are selling.
          </ProjectRight>
        </section>
        <section className="section">
          <ProjectLeft
            img="utterzone__image"
            title="Utterzone"
            tech={[
              "ReactJS",
              "Styled-Components",
              "Apollo GraphQL",
              "NodeJS",
              "MongoDB",
            ]}
            website="https://pak11273.github.io/uz"
            source="https://github.com/pak11273/utter"
          >
            Utterzone is a high-tech start-up that helps people learn languages.
            The application features a robust chat system that allows users to
            participate in language courses in a class like setting.
          </ProjectLeft>
        </section>
        <section className="section">
          <ProjectRight
            img="solar__image"
            title="Solar Aquatic Solutions"
            tech={["ReactJS", "Cloudinary", "Styled-Components", "Sass"]}
            source="https://github.com/pak11273/solaraquaticsolutions"
            website="http://pak11273.github.io/solaraquaticsolutions"
          >
            SolarAquaticSolutions is another high-tech start-up aimed to
            providing the world with a unique system to filtering water. This
            site is a gateway site for the public.
          </ProjectRight>
        </section>
        <section className="section">
          <ProjectLeft
            img="tailwind__image"
            title="TailwindReact"
            tech={["ReactJS", "MaterialUI"]}
            website="https://tailwind-react.now.sh/"
            source="https://github.com/pak11273/tailwind"
          >
            TailwindReact is an app that helps React Developers prototype their
            apps with Tailwind Components. Components are curated from the web
            then converted to React components.
          </ProjectLeft>
        </section>
        <section className="section">
          <ProjectRight
            img="overseer__image"
            title="Overspaces"
            tech={["NextJS", "ReactJS", "TailwindCSS"]}
            source="https://github.com/pak11273/overspaces"
            website="https://overspaces.now.sh/"
          >
            Overspaces is the client facing site the Overseer site. Clients from
            Overseer will be able to list properties for visitors that will be
            able to use dynamic search and filter capabilities to find available
            properties.
          </ProjectRight>
        </section>
        <section className="section">
          <div className="footer">
            All Rights Reserved &copy; {new Date().getFullYear()}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
