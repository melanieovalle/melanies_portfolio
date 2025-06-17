import profilePic from '../assets/profile_pic.png';

function DisplayHome() {
    return(
        <div className='page-wrapper'>
            <header className="header">
                <div className='header-text'>
                    <h1>Hello, world! I'm Melanie {'<3'}</h1>
                    <h2>passionate about digital literacy {'&'} accessibility.</h2>
                </div>
                <div className='header-pic'>
                    {/* <img src="./assets/profile_pic.jpg" alt="Profile Picture"/> */}
                    <img src={profilePic}/>
                </div>
            </header>

            <main className="main-container">
                <div className="home-info">
                    <div className="text-box">
                    About Me
                    </div>
                    
                    <div className="large-box">
                        <p>
                            🇬🇹 : Im an international student from Guatemala,
                            currently pursuing a double major in Computer
                            Science and Math at Bowdoin College.
                        </p>
                        <br></br>
                        <p>
                            👩‍💻 : Growing up in a country with a significant digital
                            divide, I developed a deep passion for exploring
                            how technological education can transform societies.
                        </p>
                        <br></br>
                        <p>
                            💻 : Fluent in Python, Java, HTML, JavaScript, CSS, and TypeScript.
                        </p>
                        <p>With experience in C and Assembly.</p>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default DisplayHome;