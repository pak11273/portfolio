import React from "react"

const CV = () => {
  return (
    <div>
      <div id="cv-mast">
        <h4>Isaac Pak</h4>
        <h6>Full Stack Web Developer</h6>
        <h6>pak11273@yahoo.com</h6>
      </div>
      <section>
        <article>
          I am a self taught web developer with more than 3+ years of experience
          coupled with a digital marketing background. I have professionally
          worked in the Graphic Design Industry for 5+ years. I have a variety
          of skills but I'm looking to continue my growth in web development.
        </article>
      </section>
      <section>
        <h6>Experience</h6>
        <h6>Freelance Web Developer</h6>
        <article>
          Utterzone 06/2016 – present I build and design applications varying
          from static information sites to dynamic applications with user
          interactivity. I can also help companies with branding and marketing.
          Some of the tools I use are the React framework for frontend
          applications, redux/sagas for state management, mongodb or sql for
          databases, and graphql/rest for apis. I also have experience in php,
          wordpress and the laravel framework.
        </article>
      </section>
      <section>
        <h6>Digital Marketing Manager Sermonview 09/2014 – 06/2016</h6>
        <article>
          My main responsibility was to manage the company's internet marketing
          campaigns. Marketing campaigns consisted of designing weekly email
          campaigns and internet ads. This also required developing and
          optimizing landing pages. I used google analytics to drive the
          advertising campaigns. Online Marketing Manager Software Allies I also
          have experience in php, wordpress and the laravel framework.
        </article>
      </section>
      <section>
        <h6>Online Marketing Manager Software Allies 04/2012 – 07/2014</h6>
        <article>
          I was in charge of managing the company's internet marketing. I worked
          with the Sales Director to build the company branding and to create
          our internet presence. A key role that I had was acquiring new clients
          through my marketing efforts and starting new business relationships.
          Sign Designer Outdoor Dimensions 03/2005 – 05/2008 Part of a design
          team of 10 designers, I worked with project managers to design
          architectural signs for clients. These designs had to sell to a niche
          target while keeping a creative feel and also maintain the client's
          branding. Some of the projects consisted of multi-million dollar
          campaigns that included indoor,outdoor and monumental signs.
        </article>
      </section>
      <section>
        <h6>Graphic/Web Designer Altawood Inc. 12/2002 – 01/2005</h6>
        <article>
          This was my first graphic design job out of college. I was hired as an
          assistant designer, but soon took the lead designer position after a
          few months. I managed the company website, catalog and product
          labeling. I worked closely with the sales manager to develop new
          strategies for promoting the company products.
        </article>
      </section>
      <section id="skills">
        <h6>
          {" "}
          Skills Major :{" "}
          <span>
            {" "}
            javascript, html5, css3, react, redux, sagas, nodejs, express,
            mongoose, mongodb, redis, web design, graphic design, rest, graphql,
            mysql
          </span>
        </h6>
        <h6>Minor : </h6>
        <span>php, wordpress, java, spring, python, postgres, dev ops</span>
      </section>
      <section id="organizations">
        <h6>Organizations</h6>
        <ul>
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
      </section>
    </div>
  )
}

export default CV
