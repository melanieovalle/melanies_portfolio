
import { Link } from 'react-router-dom'
import "./navbar.css"

function WebsiteNavbar() {
    return (
        <nav>
            <div className= 'navbar'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/education">Education</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default WebsiteNavbar;