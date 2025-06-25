
function DisplayContact() {
    return(
        // <div className="page-wrapper">
            <div className="contact-container">
                <div className="text-box">
                    💌 Let's Connect!
                </div>
                <div className="large-box">
                    {/* %20: spaces | %0A: line breaks */}
                    <p>
                        📫 : <a
                            href="mailto:melanieovalle008@gmail.com?subject=Let's%20Connect&body=Hi%20Melanie%2C%0A%0AI%20wanted%20to%20reach%20out%20and..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Email Me
                        </a>
                    </p>
                    <p>
                        💼 : <a
                            href="https://www.linkedin.com/in/melanie-ovalle-a25609310/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        💻 : <a
                            href="https://github.com/melanieovalle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        // </div>
    )
}

export default DisplayContact;