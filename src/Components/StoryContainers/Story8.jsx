import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Story8({information}) {
 
  return (
    <div className="story8-container">
      {information && 
        <>  
          <Link to={`/Article/${information.articleId}`}>
          <div className="story8-image-wrapper">
          <img className='story8-image' src={information.articleMainImage} alt="" />

          </div>

          <div className="story8-details">

            <div className="story8-category">{information.articleCategory}</div>
            <div className="story8-title">{information.articleTitle}</div>
            <div className="story8-description">{information.articlePreface}</div>
      
          </div>
          </Link>

        </>
      }
   

    </div>
  )
}
