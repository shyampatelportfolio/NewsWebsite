import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Story10({information}) {
 
  return (
    <div className="story10-container">
      {information && 
        <>  
            <Link to={`/Article/${information.articleId}`}>
          <div className="story10-image-wrapper">


          <img className='story10-image' src={information.articleMainImage} alt="" />
          </div>

          <div className="story10-overlay"></div>
          <div className="story10-details">
            <div className="story10-category">{information.articleCategory}</div>
            <div className="story10-title">{information.articleTitle}</div>
            <div className="story10-description">{information.articlePreface}</div>
          </div>
          </Link>
        </>
      }
   

    </div>
  )
}
