import React from 'react'
import { Link } from 'react-router-dom'

export default function Story7({information}) {
    return (
        <div className="story7-container">
          {information && 
            <>  
            <div className="story7-image-container">
              <Link to={`/Article/${information.articleId}`}>
                  <img className='story7-image' src={information.articleMainImage} alt="" />
              </Link>
            </div>
              <div className="story7-details">
    
                <div className="story7-category">{information.articleCategory}</div>
                <div className="story7-title">{information.articleTitle}</div>
                <div className="story7-description">{information.articlePreface}</div>
              </div>
            
    
            </>
          }
       
    
        </div>
      )
}
