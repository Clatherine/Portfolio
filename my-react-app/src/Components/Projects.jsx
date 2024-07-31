import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Projects (){

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setActiveIndex(selectedIndex);
    };
return(
<section>
    <h2> PROJECTS</h2>
    <div id="projects_container">
<div className = "project_box">
  <div className ="project_box_div image"><a href= "https://city-explorer-web.netlify.app/" target="_blank" rel="noopener noreferrer">
<img className="project_image" src="../../public/CityExplorer.png" alt="image of City Explorer App"/></a></div>
<div className ="project_box_div text"><h3>City Explorer App</h3>    <p>City Explorer is a full-stack React Native web and Android app that helps tourists plan their travel itineraries in major UK cities. Users browse attractions according to their preferences and can then view a route between their chosen attractions.</p>

<p>The app was built by myself and 2 other team-members during the final project phase of the Northcoders bootcamp.</p>
<div className = "tools"><p>JavaScript</p><p>TypeScript</p><p>React Native</p><p>React Bootstrap</p><p>Google Maps API</p><p>Jest</p><p>SuperTest</p><p>PostgreSQL</p><p>Supabase</p><p>Render</p><p>GitHub</p><p>Git</p><p>Node.js</p><p>Netlify</p></div>
<div className="buttons"><a href="https://city-explorer-web.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit site</button></a>
<a href="https://northcoders.com/project-phase/city-explorer" target="_blank" rel="noopener noreferrer"><button >Learn More</button></a><a href="https://github.com/EliR94/city-explorer-backend" target="_blank" rel="noopener noreferrer"><button>Back-End Repo</button></a><a href="https://github.com/michael-farah/city-explorer-app" target="_blank" rel="noopener noreferrer"><button>Front-End Repo</button></a></div></div>
</div>

<div className = "project_box">
  <div className ="project_box_div image"><a href= "https://hot-off-the-press-news.netlify.app/" target="_blank" rel="noopener noreferrer">
<img className="project_image" src="../../public/Hot off the Press News.png" alt="image of Hot Off the Press News site"/></a></div>
<div className ="project_box_div text"><h3>Hot Off The Press News</h3>   <p>Hot Off The Press News is my first solo full-stack web app.</p> <p>Built using React, this site allows users to browse, read, vote and comment on news articles. Users can filter articles by topic, and sort results by date, number of comments or number of votes. Please note that the API may take a few minutes to start working, so please be patient!</p>
<div className = "tools"><p>JavaScript</p><p>React</p><p>Jest</p><p>SuperTest</p><p>PostgreSQL</p><p>Supabase</p><p>Render</p><p>GitHub</p><p>Git</p><p>Node.js</p><p>Netlify</p></div>
<div className="buttons"><a href="https://hot-off-the-press-news.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit site</button></a>
<a href="https://github.com/Clatherine/be-nc-news-" target="_blank" rel="noopener noreferrer"><button>Back-End Repo</button></a><a href="https://github.com/Clatherine/nc-news" target="_blank" rel="noopener noreferrer"><button>Front-End Repo</button></a></div></div>
</div>
<div className = "project_box">
  <div className ="project_box_div image"><a href= "https://66a147a3ae90d61eb74c35c6--atworthhistorygroup.netlify.app/" target="_blank" rel="noopener noreferrer">
<img className="project_image" src="../../public/AHG.png" alt="image of Atworth History Group site"/></a></div>
<div className ="project_box_div text"><h3>Atworth History Group</h3> <p>I made this site for my local History Group, who needed their website updating. It is a fully-responsive Front-End-only React web app, and makes use of React-bootstrap components.</p>
<div className = "tools"><p>JavaScript</p><p>React</p><p>React Bootstrap</p><p>GitHub</p><p>Git</p><p>Node.js</p><p>Netlify</p></div>
<div className="buttons"><a href="https://66a147a3ae90d61eb74c35c6--atworthhistorygroup.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit site - remember to update this</button></a>
<a href="https://github.com/Clatherine/Atworth_history_group" target="_blank" rel="noopener noreferrer"><button>Front-End Repo</button></a></div></div>
</div>
<div className = "project_box">
  <div className ="project_box_div image"><a href= "https://66a147a3ae90d61eb74c35c6--atworthhistorygroup.netlify.app/" target="_blank" rel="noopener noreferrer">
<img className="project_image" src="../../public/Hangman.png" alt="image of Hangman site"/></a></div>
<div className ="project_box_div text"><h3>Hangman</h3> <p>My first React app - an online hangman game! Users choose letters until they complete the word or the hangman image completes and they lose. Have a play!</p>
<div className = "tools"><p>JavaScript</p><p>React</p><p>GitHub</p><p>Git</p><p>Node.js</p><p>Netlify</p></div>
<div className="buttons"><a href="https://hangman34.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit site</button></a>
<a href="https://github.com/Clatherine/Hangman" target="_blank" rel="noopener noreferrer"><button>Front-End Repo</button></a></div></div>
</div>
<div className = "project_box">
  <div className ="project_box_div image"><a href= "https://noughtsandcrosses3.netlify.app/" target="_blank" rel="noopener noreferrer">
<img className="project_image" src="../../public/Noughts and Crosses.png" alt="image of Hangman site"/></a></div>
<div className ="project_box_div text"><h3>Noughts and Crosses</h3> <p>Another mini React project built in an evening - this time, an online Noughts and Crosses game. Two players take turns to get 3 in a row!</p>
<div className = "tools"><p>JavaScript</p><p>React</p><p>GitHub</p><p>Git</p><p>Node.js</p><p>Netlify</p></div>
<div className="buttons"><a href="https://noughtsandcrosses3.netlify.app/" target="_blank" rel="noopener noreferrer"><button>Visit site</button></a>
<a href="https://github.com/Clatherine/fe-tiny-react-apps/tree/main/NoughtsAndCrosses" target="_blank" rel="noopener noreferrer"><button>Front-End Repo</button></a></div></div>
</div>
    </div>
  
</section>

)

}

export default Projects