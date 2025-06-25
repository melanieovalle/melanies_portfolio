import '../App.css'

function Footer() {
    return(
        <div className='page-wrapper'>
            <div className='logon-footer'>
                &copy; 2025 Melanie Ovalle.
                <br/>
                <span className='flex'>
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
                        &nbsp;&nbsp;&nbsp;&nbsp;💼 : <a
                            href="https://www.linkedin.com/in/melanie-ovalle-a25609310/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            LinkedIn
                        </a>
                    </p>
                </span>
                
            </div>

        </div>
    )
}

export default Footer;