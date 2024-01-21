import React from 'react'
import { Link } from 'react-router-dom'

export default function Story6({information}) {
    return (
        <div className="story6-container">
          {information && 
            <>  
    
              <div className="story6-details">
    
                <div className="story6-category">{information.articleCategory}</div>
                <div className="story6-title">{information.articleTitle}</div>
                <div className="story6-description">{information.articlePreface}</div>
              </div>
              <div className="story6-image-container">
                <Link to={`/Article/${information.articleId}`}>
        
                  <img className='story6-image' src={information.articleMainImage} alt="" />
                </Link>
              </div>
    
            </>
          }
    
        </div>
      )
}
