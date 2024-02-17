import React from 'react'

const Newsitem =(props)=> {
    
        let { title, description,imageUrl,url,publishedAt,author } = props;
        return (
            <div><div className="card" style={{ width: "18rem" }}>
                <img src={!imageUrl?"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=":imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                        <h6 style={{color: "#87758F", fontSize: "13px", fontFamily:"monospace"}}>Published By: {author}</h6>
                        <h6 style={{color: "#87758F", fontSize: "13px", fontFamily:"monospace"}}>Published on: {publishedAt.slice(0,10)}</h6>
                    </p>
                    
                    <a href={url} className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
            </div>
        )
    }


export default Newsitem