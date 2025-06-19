import {useState} from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/">
                    <img src={icon} alt="Website Icon" style={{ cursor: 'pointer' }} />
                </Link>
            </div>

            <div className={`navbar-links ${navToggle ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setNavToggle(false)}>Home</Link>
                    <Link to="/projects" onClick={() => setNavToggle(false)}>Projects</Link>
                    <Link to="/experience" onClick={() => setNavToggle(false)}>Experience</Link>
                    <Link to="/education" onClick={() => setNavToggle(false)}>Education</Link>
                    <Link to="/blog" onClick={() => setNavToggle(false)}>Blog</Link>
                    <Link to="/contact" onClick={() => setNavToggle(false)}>Contact</Link>
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