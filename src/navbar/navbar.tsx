import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import icon from '../assets/icon.png';

function WebsiteNavbar() {
    const [navToggle, setNavToggle] = useState(false);

    const toggleNavBar = () => {
        setNavToggle(!navToggle);
    };

    return (
        <nav className= 'navbar'>
            <div className= 'navbar-logo'>
                <NavLink to="/">
                    <img src={icon} alt="Website Icon" style={{ cursor: 'pointer' }} />
                </NavLink>
            </div>

            <div className={`navbar-links ${navToggle ? 'active' : ''}`}>
                    <NavLink to="/" 
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" 
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Projects
                    </NavLink>
                    <NavLink to="/experience" 
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Experience
                    </NavLink>
                    <NavLink to="/education" 
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Education
                    </NavLink>
                    <NavLink to="/blog" 
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" 
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </NavLink>
                </div>

            {/* <div className={`navbar-contact ${navToggle ? 'active' : ''}`}>
                    <Link to="/contact" onClick={() => setNavToggle(false)}>Contact</Link>
            </div> */}
            

            <div className='navbar-toggle-container' onClick={toggleNavBar} aria-label="Toggle menu" role="button" tabIndex={0}>
                <div className="toggle-title">Menu</div>
                <div className="navbar-toggle">{navToggle ? '\u2715' /* × icon */ : '\u2630' /* ☰ icon */}</div>

                
                
            </div>
        </nav>
    )
}

export default WebsiteNavbar;