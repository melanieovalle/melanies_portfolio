
function DisplayProjects() {
    return(
        <div className="page-wrapper">
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
        </div>
    )
}

export default DisplayProjects;