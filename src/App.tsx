// import React { useState }from 'react';
import './App.css';
import profilePic from './assets/profile_pic.png';
// import Navbar from './components/Navbar';


function App() {
 // State to track current page
 // const [currentPage, setCurrentPage] = useState('home');
 
 return (
   <>
    


   <div className="App">
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
           {/* <div className='title-box'> */}
             {/* <h2>About me:</h2> */}
           {/* </div> */}
           
          
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


       <div className="projects-container">
        <div className="text-box">
          My Projects {'<'}3
        </div>
        <div className="project-boxes">
            <div className="medium-box">
              <p>Project 1</p>
              <p>Date:</p>
              <p>Company: Dana-Farber</p>
            </div>
            <div className="medium-box">
              <p>Project 2</p>
              <p>Date:</p>
              <p>Company: Interlibrary Loan Bowdoin College</p>
            </div>
         </div>
       </div>


       <div className="education-container">
        <div className="text-box">
         Education
        </div>
         <div className="large-box">
           <p>Bowdoin College 2023 - 2027 (expected graduation)</p>
           <p>Classes:</p>
           <p>Awards:</p>
         </div>
         <div className="large-box">
           <p>American School of Guatemala</p>
           <p>Classes:</p>
           <p>Awards:</p>
         </div>
       </div>


       <div className="experience-wraper">
        <div className="text-box">
         Experience
        </div>
        <div className='experience-container'>
          <div className='small-box'>🩷</div>
          <div className="large-box">
           <p>Web Developer --- Dana-Farber Cancer Institute</p>
           <p>Program: Early Leaders Tech</p>
          </div>
        </div>

        <div className='experience-container'>
          <div className='small-box'></div>
          <div className="large-box">
           <p>Early Leaders --- Wayfair</p>
           <p>Program: Early Leaders Tech</p>
           <ul>
             <li>Selected in a cohort out of 400 applicants nationwide</li>
             <li>Gained hands-on experience</li>
           </ul>
          </div>
        </div>

        <div className='experience-container'>
          <div className='small-box'></div>
          <div className="large-box">
           <p>Web Developer --- Interlibrary Loan Bowdoin College</p>
           <p>Program: Early Leaders Tech</p>
           <ul>
             <li>Selected in a cohort out of 400 applicants nationwide</li>
             <li>Gained hands-on experience</li>
           </ul>
          </div>
        </div>
      </div>


       <div className="contact-container">
        <div className="text-box">
         💌 Let's Connect!
        </div>
         <div className="large-box">
           <p>📫 : Email Me</p>
           <p>💼 : LinkedIn</p>
         </div>
       </div>
     </main>


    
   </div>
   </>
 );


}


export default App;
