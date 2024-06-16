import React from 'react'

const NewsItem = (props)=>  {
    
  
    let {title , description , imageUrl ,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
         <span className='  badge rounded-pill bg-danger'>{source}</span>
         </div>
  <img src={!imageUrl?"https://media.istockphoto.com/id/959633894/photo/flag-of-pakistan.webp?b=1&s=170667a&w=0&k=20&c=x7aH6XATKDlY1nIO1qNcx7gmTk_gmWAOj5MaT2WQPMI=":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description} .....</p>
    <p className='card-text'><small className=' text-success'>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href= {newsUrl} target='_blank'  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
