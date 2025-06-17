// import React { useState }from 'react';
import './App.css';
// import profilePic from './assets/profile_pic.png';
// import DisplayProjects from './components/projects';
// import DisplayEducation from './components/education';
// import DisplayExperience from './components/experience';
// import DisplayContact from './components/contact';
import WebsiteNavbar from './navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import DisplayProjects from './components/projects';
import DisplayEducation from './components/education';
import DisplayExperience from './components/experience';
import DisplayContact from './components/contact';
import DisplayHome from './components/home';
import Footer from './components/footer';



function App() {
 // State to track current page
 // const [currentPage, setCurrentPage] = useState('home');
 
 return (
   <>
   <div className="App">
    <WebsiteNavbar/>
    <Routes>
      <Route path="/" element={<DisplayHome />} />
      <Route path="/projects" element={<DisplayProjects />} />
      <Route path="/experience" element={<DisplayExperience />} />
      <Route path="/education" element={<DisplayEducation />} />
      <Route path="/contact" element={<DisplayContact />} />
    </Routes>
    <Footer/>
   </div>
   </>
 );
}

export default App;
