import imageILL from '../assets/interlibraryloan.png';
import imageFam3Pro from '../assets/fam3pro.png';
import { NavLink } from 'react-router-dom';
import {IoCalendarNumberOutline, IoBusinessOutline} from 'react-icons/io5'

function DisplayProjects() {
    return(
        <div className="page-wrapper">
            <div className="projects-container">
                <div className="text-box">
                My Projects {'<'}3
                </div>
                <div className="project-boxes">
                    <div className="medium-box">
                        <p className="box-title"> R-Shiny to React</p>
                        <p>
                            <IoCalendarNumberOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Summer 2025</span>
                        </p>
                        <p>
                            <IoBusinessOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>
                            <span> Dana-Farber Cancer Institute & Bayes Mendel Lab - Data Science Department at Harvard</span>
                        </p>

                        <NavLink to="https://illiad.bowdoin.edu/Lending/LendingLogon.html">
                            <img src={imageFam3Pro} alt="Website Icon" style={{ cursor: 'pointer' }} />
                        </NavLink>
                        
                        <h4> About: </h4>
                        <ul>
                            <li>Rebuilding the Fam3Pro interface—a cancer pedigree app—from R-Shiny to React and Node.js</li>
                            <li>Redesigning the front end to enhance accessibility and usability, with a projected 30% improvement</li>
                        </ul>
                        <h4> Tools: </h4>
                        <ul>
                            <li>TypeScript, JavaScript, React, Node.js, Tailwind</li>
                        </ul>
                    </div>

                    <div className="medium-box">
                        <p className='box-title'>HTML/CSS Front-End</p>
                        <p>
                            <IoCalendarNumberOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Spring 2025 - Present</span>
                        </p>

                        <p>
                            <IoBusinessOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Interlibrary Loan Bowdoin&nbsp;College</span>
                        </p>
                        <NavLink to="https://illiad.bowdoin.edu/Lending/LendingLogon.html">
                            <img src={imageILL} alt="Website Icon" style={{ cursor: 'pointer' }} />
                        </NavLink>

                        <h4> About: </h4>
                        <ul>
                            <li>Redesigned the Front-End</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <h4> Tools: </h4>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                        </ul>
                    </div>
                </div>
                <div className="project-boxes">
                    <div className="medium-box">
                        <p className="box-title">Bot Check</p>
                        <p>
                            <IoCalendarNumberOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Summer 2025</span>
                        </p>
                        <p>
                            <IoBusinessOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>
                            <span> Personal Project</span>
                        </p>
                        <h4> About: </h4>
                        <ul>
                            <li>Redesigned the Front-End</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <h4> Tools: </h4>
                        <ul>
                            <li>TypeScript & React</li>
                        </ul>
                    
                    </div>

                    <div className="medium-box">
                        <p className='box-title'>Sign In Form</p>
                        <p>
                            <IoCalendarNumberOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Summer 2025</span>
                        </p>

                        <p>
                            <IoBusinessOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Personal Project</span>
                        </p>
                        <h4> About: </h4>
                        <ul>
                            <li>Redesigned the Front-End</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <h4> Tools: </h4>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                        </ul>
                    </div>
                </div>
                <div className="project-boxes">
                    <div className="medium-box">
                        <p className="box-title">Personal Portfolio</p>
                        <p>
                            <IoCalendarNumberOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Summer 2025</span>
                        </p>
                        <p>
                            <IoBusinessOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>
                            <span> Personal Project</span>
                        </p>
                        <h4> About: </h4>
                        <ul>
                            <li>Created a personal front-end website using TypeScript, React, Vite, and Tailwind</li>
                            <li>Scored XXX on accessibility</li>
                            <li></li>
                        </ul>
                        <h4> Tools: </h4>
                        <ul>
                            <li>TypeScript, React, Vite, and Tailwind</li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProjects;