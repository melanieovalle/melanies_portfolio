import {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./navbar.css";
import icon from '../assets/icon.png';
import GetBotCheckNums from '../components/botCheck';

function WebsiteNavbar() {
    const [navToggle, setNavToggle] = useState(false);
    const [botCheckPassed, setBotCheckPassed] = useState(false);
    const [pendingRoute, setPendingRoute] = useState<string | null>(null);
    const [showBotCheck, setShowBotCheck] = useState(false);


    const toggleNavBar = () => {
        setNavToggle(!navToggle);
    };

    const handleProtectedNavClick = (e: React.MouseEvent, path: string) => {
        if (!botCheckPassed) {
            e.preventDefault();         // block navigation
            setPendingRoute(path);      // save where they wanted to go
            setShowBotCheck(true);      // show the bot check popup
        } else {
            setNavToggle(false);        // user verified, allow navigation
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (botCheckPassed && pendingRoute) {
            navigate(pendingRoute);     // Redirect to the saved path
            setShowBotCheck(false);     // Hide the popup
            setPendingRoute(null);      // Clear the pending route
        }
    }, [botCheckPassed, pendingRoute, navigate]);

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
                        // onClick={() => setNavToggle(false)}
                        onClick={(e) => handleProtectedNavClick(e, "/projects")}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Projects
                    </NavLink>
                    <NavLink to="/experience" 
                        // onClick={() => setNavToggle(false)}
                        onClick={(e) => handleProtectedNavClick(e, "/experience")}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Experience
                    </NavLink>
                    <NavLink to="/education" 
                        // onClick={() => setNavToggle(false)}
                        onClick={(e) => handleProtectedNavClick(e, "/education")}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Education
                    </NavLink>
                    <NavLink to="/blog" 
                        // onClick={() => setNavToggle(false)}
                        onClick={(e) => handleProtectedNavClick(e, "/blog")}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" 
                        // onClick={() => setNavToggle(false)}
                        onClick={(e) => handleProtectedNavClick(e, "/contact")}
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

            {showBotCheck && (
            <div className="bot-check-overlay">
                <div className="bot-check-modal">
                    <GetBotCheckNums setBotCheckPassed={setBotCheckPassed} />
                </div>
            </div>
)}
        </nav>
    )
}

export default WebsiteNavbar;