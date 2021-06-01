import React from "react";

// Education
// Lambda School, Full Stack Development						        Jan 2021 - June 2021
// An online school for full stack web development and data science

// Westwood College, Graphic Design						     Sept 2000 - June 2002
// An art college for graphic and multimedia design

// Work Experience
// Marketing Mgr, SolarAquatic Solutions - Frisco, TX		                                     June 2016 - Jan 2021
// Created and maintained company branding, catalog, website, stationery
// Created email campaigns using mailChimp and hosted information webinars

// Digital Media Mgr, Sermonview - Vancouver, WA                                                                   Jan 2018 - Sept 2020
// Created and maintained G/A campaigns and generated monthly G/A reports
// Created and maintained custom wordpress websites/plugins for clients

const CV = () => {
  return (
    <div className="wrapper">
      <section id="cv-mast" className="row center-xs">
        <h4>Isaac Pak</h4>
        <h6>Full Stack Web Developer</h6>
        <a href="mailto:isaac.pak.2024@gmail.com">isaac.pak.2024@gmail.com</a>
      </section>
      <section className="cv__section row center-xs">
        <p className="col-xs-8 col-md-6">
          I love to develop applications on the web. I like getting my hands
          into everything from concept to production and everything in between.
        </p>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h5 className="categories">Skills</h5>
          <div className="pin" />
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <p className="cv__company">Frontend</p>
          <h6 className="cv_section__title">
            React.js, HTML, Sass, Javascript
          </h6>
        </div>
        <div className="col-md-6 col-xs-8">
          <p className="cv__company">Backend</p>
          <h6 className="cv_section__title">
            Node.js, PostgreSQL, Docker, Python, Java, Spring
          </h6>
        </div>
        <div className="col-md-6 col-xs-8">
          <p className="cv__company">Design</p>
          <h6 className="cv_section__title">
            Figma, Adobe Photoshop, Illustrator
          </h6>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h5 className="categories">Software Solutions</h5>
          <div className="pin" />
          <h6 className="cv_section__title">Frontend Engineer</h6>
          <p className="cv__company github">
            <a href="https://github.com/Lambda-School-Labs/bg-emotion-tracker-fe-b">
              Boys & Girls Club
            </a>
          </p>
          <h6 className="cv__date">02/2021 – 03/2021</h6>
          <p id="center_text">React | Java | Spring | Postgres</p>
          <ul>
            <li>
              Built wireframes in figma for User login modal, QR reader, and
              emoji picker
            </li>
            <li>
              Fixed security vulnerabilities by securing routes for admins and
              club directors by creating an HOC with React hooks.
            </li>
            <li>
              Designed the state mgmt for users, clubs, and activities using
              React's context api
            </li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Frontend Engineer</h6>
          <p className="cv__company github">
            <a href="https://github.com/pak11273/marketplace-fe">
              African Marketplace
            </a>
          </p>
          <h6 className="cv__date">03/2021 – 04/2021</h6>
          <p id="center_text">React | Redux | Java | Spring | NodeJS</p>
          <ul>
            <li>
              Used React to create UI components: LandingPage, Marketplace,
              ProductCard, Navbar, Sidebar, Dropdown, Button, Footer, Header,
              List, and Form
            </li>
            <li>
              Created the theme and branding using Sass for the styles and
              applied mixins to styles depending on content and category
            </li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Frontend Engineer</h6>
          <p className="cv__company github">
            <a href="https://github.com/pak11273/secret-recipes">
              Secret Family Recipes
            </a>
          </p>
          <h6 className="cv__date">04/2021 – 05/2021</h6>
          <p id="center_text">React | Redux | Postgres | NodeJS</p>
          <ul>
            <li>
              Used React.js to implement API calls so that users were able to
              register and store their family recipes
            </li>
            <li>
              Developed the global state using Redux for userReducer and
              recipeReducers
            </li>
            <li>
              Created all routes using React Router and included PrivateRoutes
              for secured routes
            </li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Backend Engineer</h6>
          <p className="cv__company github">
            <a href="https://github.com/Rent-My-Tech-Stuff/java">
              Rent My Tech Stuff
            </a>
          </p>
          <h6 className="cv__date">04/2021 – 05/2021</h6>
          <p id="center_text">React | Redux | Java | Spring | Postgres</p>
          <ul>
            <li>
              Designed the User, Role, and Rental models using the Spring
              Framework
            </li>
            <li>
              Designed the API endpoints in the User and Rental controllers so
              users can save their tech data to a Postgres database
            </li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h5 className="categories">Experience</h5>
          <div className="pin" />
          <h6 className="cv_section__title">Marketing Manager</h6>
          <p className="cv__company">Solar Aquatic Solutions</p>
          <h6 className="cv__date">06/2016 – 07/2020</h6>
          <p className="cv__section__copy">
            I was the lead marketing manager for a water purifying start up. I
            was in charge of heading all of the strategic marketing initiatives
            and all media platforms.
          </p>
          <ul>
            <li>Developed the company branding and website</li>
            <li>Conducted SWOT Analysis and marketing research</li>
            <li>Implemented and the company crm (Salesforce)</li>
            <li>Rolled out weekly email marketing campaigns</li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Digital Marketing Manager</h6>
          <p className="cv__company">Sermonview </p>
          <h6 className="cv__date">09/2014 – 06/2016</h6>
          <p className="cv__section__copy">
            I designed, developed and maintained client websites. I also managed
            the company's digital marketing campaigns and social media.
          </p>
          <ul>
            <li>
              Creating google adword campaigns from keyword analysis and a/b
              testing
            </li>
            <li>Analyzed google analytics and reports</li>
            <li>Designing email templates in MailChimp for mail marketing</li>
            <li>Create landing pages for digital marketing campaigns</li>
            <li>Maintained custom wordpress websites/plugins for clients</li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Marketing/Office Manager</h6>
          <p className="cv__company">Software Allies</p>
          <h6 className="cv__date">04/2012 – 07/2014</h6>
          <p className="cv__section__copy">
            I worked with the Sales Director to build the company branding and
            to create our internet presence. Another key role that I played was
            acquiring new clients through internet marketing efforts and
            starting new business relationships.
          </p>
          <ul>
            <li>Salesforce Certified Administrator</li>
            <li>Google Adwords Manager</li>
            <li>Analyzed Google Analytics and reports</li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Sign Designer</h6>
          <p className="cv__company">Outdoor Dimensions</p>
          <h6 className="cv__date">03/2005 – 05/2008</h6>
          <p className="cv__section__copy">
            I was part of a design team that consisted of 10 designers. These
            designs had to sell to a niche target while keeping a creative feel
            and also maintain the client's branding. Some of the projects
            consisted of large scale communities that included indoor, outdoor
            and monumental signs.
          </p>
          <ul>
            <li>Design architectural signs in Adobe</li>
            <li>Illustrator/Photoshop</li>
            <li>Design banners and flags</li>
            <li>
              Work closely with Sales reps and project managers to meet client
              expectations
            </li>
          </ul>
        </div>
      </section>
      <section className="cv__section row center-xs">
        <div className="col-md-6 col-xs-8">
          <h6 className="cv_section__title">Graphic/Web Designer</h6>
          <p className="cv__company">Altawood Inc.</p>
          <h6 className="cv__date">12/2002 – 01/2005</h6>
          <p className="cv__section__copy">
            This was my first graphic design job out of college. I was hired as
            an assistant designer, but soon took the lead designer position
            after a few months. I worked closely with the sales manager to
            develop new strategies for promoting the company products.
          </p>
          <ul>
            <li>Built and maintained the company’s ecommerce site</li>
            <li>Designed print media with QuarksExpress</li>
            <li>Maintained and updated all company marketing assets</li>
          </ul>
        </div>
      </section>
      <section className="cv__section cv__section__skills__major row center-xs">
        <div className="col-md-6 col-xs-8">
          <h5 className="cv__section__skills categories">Skills</h5>
          <div className="pin" />
          <h6>Major</h6>
          <p>
            OOP, Design Patterns, API Design, Web Design, Graphic Design,
            JavaScript, SASS, React, Redux, Sagas, NodeJS, ExpressJS, Mongoose,
            Mongodb, Redis, Rest, GraphQL, postgreSQL, GoLang, Gin
          </p>
        </div>
      </section>
      <section className="cv__section cv__section__skills__major cv__section__education row center-xs">
        <div className="col-md-6 col-xs-8">
          <h5 className="cv__section__skills categories">Education</h5>
          <div className="pin" />
          <h6>Westwood College - Ft.worth, TX</h6>
          <p>Associates of Graphic Design</p>
        </div>
      </section>
      <section className="cv__section row center-xs cv__section__skills__organizations">
        <div className="col-md-6 col-xs-8">
          <h6>Organizations</h6>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/user/pak11273/videos?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="http://stackoverflow.com/users/1991020/isaac-pak"
                target="_blank"
                rel="noopener noreferrer"
              >
                stackoverflow
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pak11273"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/isaac-pak-78b72687/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CV;
