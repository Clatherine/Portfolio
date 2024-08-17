import pdf from '../../public/CatherinePulmanCV.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

function SkillsAndEducation(){
    return (
        <section id="skills_ed">
            <h2 id="skillsAndEdHeader"> SKILLS & EDUCATION
            </h2>
            <div id="skillsAndEd">
                <section>
                    <h3>Skills</h3>
                    <ul> 
                    <li><span className="bolded">Languages:</span> JavaScript, using Node.js and browsers as environment, HTML, CSS</li>
                    <li><span className="bolded">Testing:</span> TDD, Jest, Supertest</li>
                    <li><span className="bolded">Back-end:</span> SQL, PSQL, seeding, migrations</li>
                    <li><span className="bolded">Front-end:</span> HTML, CSS, React, React Native, Next.js</li>
                    <li><span className="bolded">Hosting:</span> Supabase, Render, Netlify</li>
                    <li><span className="bolded">Other:</span> Git, GitHub, GitLab, Paired programming, technical communication, Agile and SCRUM methodologies, Wireframing, Figma</li>
                    </ul>
                </section>
                <section id="education_section">
                    <div><h3>Education</h3></div>
                    <div id="education_div"><ul> 
                        <li><span className="bolded">Northcoders  Full-stack Software Development Bootcamp:</span> April to July 2024</li>
             
                        <li><span className="bolded">BA (Hons) Natural Sciences, University of Cambridge:</span> 1st (2013) </li>
                      
                    </ul>  <a id="cv" href={pdf} target = "_blank" rel="noopener noreferrer"><p>Download CV </p>
               <FontAwesomeIcon id="cv_icon"icon={faFile} size="4x"/></a>
               </div>
                </section>
            </div>
            
        </section>
    )
}

export default SkillsAndEducation