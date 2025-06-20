import imageILL from '../assets/interlibraryloan.png';
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
                        <p className="box-title">R-Shiny to React</p>
                        <p>
                            <IoCalendarNumberOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>&nbsp;
                            <span>Summer 2025</span>
                        </p>
                        <p>
                            <IoBusinessOutline size='clamp(1rem, 1.5vw, 2.2vw)'/>
                            <span> Dana-Farber Cancer Institute & Bayes Mendel Lab - Data Science Department at Harvard</span>
                        </p>

                        <NavLink to="https://illiad.bowdoin.edu/Lending/LendingLogon.html">
                            <img src={imageILL} alt="Website Icon" style={{ cursor: 'pointer' }} />
                        </NavLink>
                        
                        <h3>About:</h3>
                        <ul>
                            <li>Redesigned the Front-End</li>
                            <li></li>
                            <li></li>
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

                        <h3>About:</h3>
                        <ul>
                            <li>Redesigned the Front-End</li>
                            <li></li>
                            <li></li>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProjects;