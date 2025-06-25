import bowdoinImg from '../assets/bowdoin.jpg';

export function DisplayBlogPreview() {
    return(
        <div>
                <div className="text-box">
                    📝 Read my blogs!
                </div>
                <div className="large-box">
                    <img src={bowdoinImg} alt="Bowdoin College Picture" style={{cursor: 'pointer', width: '40%'}} />
                </div>

        </div>
    )
}

export function DisplayBlog() {
    return(
        <div>

        </div>
    )
}