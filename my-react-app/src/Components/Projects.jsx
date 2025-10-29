import React, { useEffect, useRef, useState } from "react";

function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <h2> PROJECTS</h2>
      <div id="projects_container">
        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Cyber Security Architecture Framework
            </h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://demo.sapientkms.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="SapientKMS.png"
                alt="image of Sapient KMS home page"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? (
              <h3>Sapient Knowledge Management System</h3>
            ) : null}
            <p>
              Sapient KMS is a web-based
              knowledge management platform designed to streamline knowledge
              sharing and collaboration within organisations.
            </p>
            <p>
              As one of two developers on this project, I was primarily
              responsible for the front-end development using Lit Element web
              components, written in TypeScript. Features and functionalities
              that I worked on included a custom content management interface
              for document creation, document search capabilities and
              dashboards, site navigation menus, user management and
              authentication, and admin interfaces for data management and site
              configuration.
            </p>
            <div className="tools">
              <p>TypeScript</p>
              <p>Lit Element</p>
              <p>Deno</p>
              <p>Playwright</p>
              <p>MongoDB</p>
              <p>Node.js</p>
              <p>GitHub</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://demo.sapientkms.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Library of Things petitions page
            </h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://www.libraryofthings.co.uk/add-new-petition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="LibraryOfThings.png"
                alt="image of Library of Things page"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? (
              <h3>Library of Things petitions page</h3>
            ) : null}
            <p>
              In my role at Library of Things as a volunteer front-end
              developer, I have been working on a page that displays all the
              Library of Things sites and petitions on an interactive map, and
              allows users to initiate a petition to create a new site if a
              local site doesn't exist, using a Formik form.
            </p>
            <p>
              Library of Things is a social enterprise that allows people to
              rent useful tools and other items rather than buying them. See if
              there's a site near you using the map on this page, or create a
              new petition if this is something you'd like to see in your area!
            </p>
            <div className="tools">
              <p>TypeScript</p>
              <p>React</p>
              <p>Next.js</p>
              <p>Sass</p>
              <p>Formik</p>
              <p>GitLab</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://www.libraryofthings.co.uk/add-new-petition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Atworth History Group
            </h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://atworthhistorygroup.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="AHG.png"
                alt="image of Atworth History Group site"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? <h3>Atworth History Group</h3> : null}

            <p>
              I made this site for my local History Group, who needed their
              website updating. It is a fully-responsive Front-End-only React
              web app, and makes use of React-bootstrap components.
            </p>
            <div className="tools">
              <p>JavaScript</p>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>Node.js</p>
              <p>Netlify</p>
              <p>GitHub</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://atworthhistorygroup.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
              <a
                href="https://github.com/Clatherine/Atworth_history_group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>Hangman</h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://hangman34.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="Hangman.png"
                alt="image of Hangman site"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? <h3>Hangman</h3> : null}
            <p>
              My first React app - an online hangman game! Users choose letters
              until they complete the word or the hangman image completes and
              they lose. Have a play!
            </p>
            <div className="tools">
              <p>JavaScript</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Netlify</p>
              <p>GitHub</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://hangman34.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
              <a
                href="https://github.com/Clatherine/Hangman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Noughts and Crosses
            </h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://noughts-crosses-10.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="Noughts&Crosses.png"
                alt="image of Hangman site"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? <h3>Noughts and Crosses</h3> : null}
            <p>
              Another mini React project built in a day - this time, an online
              Noughts and Crosses game. Two players take turns to get 3 in a
              row!
            </p>
            <div className="tools">
              <p>JavaScript</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Netlify</p>
              <p>GitHub</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://noughts-crosses-10.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
              <a
                href="https://github.com/Clatherine/Noughts-Crosses/tree/main/Noughts-Crosses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Repo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              City Explorer App
            </h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://city-explorer24.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="CityExplorer.png"
                alt="image of City Explorer App"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? <h3>City Explorer App</h3> : null}
            <p></p>
            <p>
              City Explorer is a full-stack React Native web and Android app
              that helps tourists plan their travel itineraries in major UK
              cities. Users browse attractions according to their preferences
              and can then view a route between their chosen attractions.
            </p>
            <p>
              The app was built by myself and 2 other team-members during the
              final project phase of the Northcoders bootcamp. You can log in
              using the username 'madexplorer' with password 'myPassword', or
              create your own account (no email verification needed). Please be
              aware that the API takes a few minutes to spin up after
              inactivity, so please be patient!
            </p>
            <div className="tools">
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React Native</p>
              <p>React Bootstrap</p>
              <p>Google Maps API</p>
              <p>Jest</p>
              <p>SuperTest</p>
              <p>PostgreSQL</p>
              <p>Supabase</p>
              <p>Render</p>
              <p>Node.js</p>
              <p>Netlify</p>
              <p>GitHub</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://city-explorer24.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
              <a
                href="https://github.com/EliR94/city-explorer-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Back-End Repo</button>
              </a>
              <a
                href="https://github.com/michael-farah/city-explorer-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Front-End Repo</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project_box">
          {windowWidth < 1000 ? (
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Hot Off The Press News
            </h3>
          ) : null}
          <div className="project_box_div image">
            <a
              href="https://hot-off-the-press-news.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project_image"
                src="NC-news-image.png"
                alt="image of Hot Off the Press News site"
              />
            </a>
          </div>
          <div className="project_box_div text">
            {windowWidth >= 1000 ? <h3>Hot Off The Press News</h3> : null}

            <p>
              {/* <b>
                Notice! Apologies, the API service for this app is currently
                suspended, but will be resuming at the beginning of October so
                watch this space!{" "}
              </b> */}
            </p>
            <p>Hot Off The Press News is my first solo full-stack web app.</p>
            <p>
              Built using React, this site allows users to browse, read, vote
              and comment on news articles. Users can filter articles by topic,
              and sort results by date, number of comments or number of votes.
              Please note that the API may take a few minutes to start working,
              so please be patient!
            </p>
            <div className="tools">
              <p>JavaScript</p>
              <p>React</p>
              <p>Jest</p>
              <p>SuperTest</p>
              <p>PostgreSQL</p>
              <p>Supabase</p>
              <p>Render</p>
              <p>Node.js</p>
              <p>Netlify</p>
              <p>GitHub</p>
              <p>Git</p>
            </div>
            <div className="buttons">
              <a
                href="https://hot-off-the-press-news.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visit site</button>
              </a>
              <a
                href="https://github.com/Clatherine/be-nc-news-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Back-End Repo</button>
              </a>
              <a
                href="https://github.com/Clatherine/nc-news"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Front-End Repo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
