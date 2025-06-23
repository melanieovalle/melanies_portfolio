import {IoLocationOutline} from "react-icons/io5";

function DisplayEducation() {
    return(
        <div className="page-wrapper">
        <div className="education-container">
            <div className="text-box">
            Education
            </div>

            <div className="large-box">
                <p className="box-title">Bowdoin College</p>
                <p><IoLocationOutline/> Brunswick, ME, USA</p>
                <div className="flex justify-center">
                    <p><span className="font-bold">Grade:</span> 3.8 / 4.0 GPA</p>
                    <p>AUG 2023 - MAY 2027</p>
                </div>
                
                <p>Classes: Data Structures | Algorithms | Systems | Linear Algebra | Mathematical Reasoning | Data Science | Digital Text Analysis</p>
                <p>Awards: Sarah and Jame's Scholar (Dean's List)</p>
                <p>Extracurriculars: </p>
                <ul>
                    <li>Alternative Spring Break Leader - McKeen Center</li>
                    <li>First-Year Engagement Leader Howell House - Residential Life</li>
                    <li>Women in Computer Science</li>
                    <li>Joseph and Alice McKeen Center</li>
                </ul>
            </div>

            <div className="large-box">
                <p className="box-title">Universidad Carlos III de Madrid (UCM3) </p>
                <p><IoLocationOutline/> Madrid, Spain</p>
                <p>Classes: Probability | Cybersecurity</p>
                <p>Awards:</p>
            </div>

            <div className="large-box">
                <p className="box-title">American School of Guatemala</p>
                <p><IoLocationOutline/> Guatemala City, Guatemala</p>
                <p>Awards: AP Scholar Award with Distinction | National Honor Society</p>
                <p>Extracurriculars:</p>
                <ul>
                    <li>CADENA: VicePresident - Humanitarian Relief Assistance</li>
                    <li>Centro Moore: Medical Translator</li>
                    <li>Centro de Salud Z1: Pediatric Nurse Assistant</li>
                    <li>Women's Softball Team: Co-founder</li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default DisplayEducation;
