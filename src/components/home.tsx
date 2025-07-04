import profilePic from '../assets/profile_pic.png';
import DisplayContact from './contact';
// import { DisplayBlogPreview } from './blog';
import bowdoinImg from '../assets/bowdoin.jpg';

function DisplayHome() {

    return(
        <div className='page-wrapper'>
            <header className="header">
                <div className='header-text'>
                    <h1>Hello, world!</h1>
                    <h1>I&apos;m Melanie {'<3'}</h1>
                    <h2>passionate about digital literacy {'&'} accessibility.</h2>
                </div>
                <div className='header-pic'>
                    <img src={profilePic} alt="Profile Picture"/>
                </div>
            </header>

            <main className="main-container">
                <div className="home-info">
                    <div className="text-box">
                    About Me
                    </div>
                    
                    <div className="large-box">
                        <p>
                            🇬🇹 : I&apos;m an international student from Guatemala,
                            currently pursuing a double major in Computer
                            Science and Math at Bowdoin College.
                        </p>
                        <p>
                            👩‍💻 : Growing up in a country with a significant digital
                            divide, I developed a deep passion for exploring
                            how technological education can transform societies.
                        </p>
                        <p>
                            💻 : Proficient in Python, Java, JavaScript, HTML/CSS, and TypeScript. 
                            With experience in C, Assembly, and frameworks like React.
                        </p>
                    </div>
                </div>
            </main>
            <div className='home-updates-container'>
                <DisplayContact/>
                {/* <img src={bowdoinImg} alt="Bowdoin College Picture" style={{cursor: 'pointer', width: 'clamp(100px, 200px, 400px)'}} /> */}
                {/* <DisplayBlogPreview/> */}
            </div>
            
        </div>

    )
}

export default DisplayHome;