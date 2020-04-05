import "./assets/scss/index.scss"

import { ProjectLeft, ProjectRight } from "./components"
import React, { useEffect } from "react"
import { isPartiallyVisible, scrollTo } from "./assets/js/utilities"

import { Link } from "react-router-dom"
import git from "./assets/images/github-logo.png"
import linkedIn from "./assets/images/pngwave.png"
import portrait from "./assets/images/SELF.svg"
import stacked from "./assets/images/stacked-logo.png"
import youtube from "./assets/images/logo-youtube.png"

function App() {
  var isScrolling = false

  function ScrollToTop(e) {
    if (window.scrollY > 100) {
      document.getElementById("scrollToTop").style.display = "block"
    } else {
      document.getElementById("scrollToTop").style.display = "none"
    }
  }

  useEffect(() => {
    const projects = document.querySelectorAll(".project")
    const animateLeft = document.querySelectorAll(".animate--left")
    const animateRight = document.querySelectorAll(".animate--right")

    function animationScrolling(e) {
      for (var i = 0; i < projects.length; i++) {
        var listItemLeft = animateLeft[i]
        var listItemRight = animateRight[i]

        if (isPartiallyVisible(projects[i])) {
          listItemLeft.classList.add("active")
          listItemRight.classList.add("active")
        } else {
          listItemLeft.classList.remove("active")
          listItemRight.classList.remove("active")
        }
      }
    }

    function throttleScroll(e) {
      if (isScrolling === false) {
        window.requestAnimationFrame(function () {
          ScrollToTop(e)
          animationScrolling(e)
          isScrolling = false
          animationScrolling(e)
        })
      }
      isScrolling = true
    }
    document.addEventListener("scroll", throttleScroll, false)
    return document.removeEventListener("scroll", () => null)
  }, [])

  const scrollToTop = () => {
    const element = document.getElementById("container")
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top
    // return window.scrollTo(0, 0)
    scrollTo(offset, null, 2000)
  }

  return (
    <div id="container">
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
        <div className="nav row center-xs">
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
                <p>cv</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="wrapper">
        <section className="row center-xs ">
          <div className="masthead">
            <img src={portrait} className="vibrate-1" alt="self portrait" />
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
        </section>
        <section className="row center-xs">
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
            website="https://utterzone.com"
            source="https://github.com/pak11273/utter"
          >
            Utterzone is a high-tech start-up that helps people learn languages.
            The application features a robust chat system that allows users to
            participate in language courses in a class like setting.
          </ProjectLeft>
        </section>
        <section className="row center-xs">
          <ProjectRight
            img="solar__image"
            title="Solar Aquatic Solutions"
            tech={["ReactJS", "Sass"]}
            source="https://github.com/pak11273/solaraquaticsolutions"
            website="http://uneven-trail.surge.sh/"
          >
            SolarAquaticSolutions is another high-tech start-up aimed to
            providing the world with a unique system to filtering water. This
            site is a gateway site for the public.
          </ProjectRight>
        </section>
        <section className="row center-xs">
          <ProjectLeft
            img="tailwind__image"
            title="TailwindReact"
            tech={["ReactJS", "MaterialUI"]}
            website="https://tailwind.pak11273.now.sh/"
            source="https://github.com/pak11273/tailwind"
          >
            TailwindReact is a startup I created to help React Developers
            prototype their apps. Each component is handcrafted to work with
            React and React Router. The app features a styleguide and layout
            builder.
          </ProjectLeft>
        </section>
        <section className="row center-xs">
          <ProjectRight
            img="overseer__image"
            title="Overseer"
            tech={["ReactJS"]}
            source="https://github.com/pak11273/overseer"
            website="http://temporary-shoes.surge.sh/"
          >
            Overseer is a side project that I am working on for personal
            properties that I manage. This will be a portal where renters can
            make payments and inquiries.
          </ProjectRight>
        </section>
        <section className="row center-xs">
          <div className="footer">
            All Rights Reserved &copy; {new Date().getFullYear()}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
