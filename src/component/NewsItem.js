import React from "react";

const NewsItem=(props)=> {
 
    let { imageUrl, title,description, newsUrl, author, date ,source} = props;
    return (
   <>
        
          <div className="card my-2" style={{ margin: "10px 0 0 0", width:"320px"}}>
          <div className=" mybadge">
              <span className=" badge rounded-pill bg-danger">
              {source}
              
              </span>
              </div>
            <img
              src={
                !imageUrl
                  ? "https://images.news18.com/ibnlive/uploads/2023/10/market-stocks-2023-10-d11edffbbdfb26f5c00ed88cff4dcd36-16x9.jpg?impolicy=website&width=1200&height=675"
                  : imageUrl
              }
              className="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div className="card-body">
          
            
          
              <h5 className="card-title">{title}...</h5>
             
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {author} on 3 {new Date(date).toGMTString()}
                </small>
              </p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Go somewhere
              </a>
            </div>
          </div>
</>
    );
  
}

export default NewsItem;