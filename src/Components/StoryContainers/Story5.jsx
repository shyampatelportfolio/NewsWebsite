import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Story5({information}) {

  return (
    <div className="story5-container">
      {information && 
        <>  
        <div className="story5-image-wrapper">
          <Link to={`/Article/${information.articleId}`}>
            <img className='story5-image' src={information.articleMainImage} alt="" />
            <div className="story5-overlay"></div>
          </Link>
        </div>
          <div className="story5-details">
            <div className="story5-category">{information.articleCategory}</div>
            <div className="story5-title">{information.articleTitle}</div>
            <div className="story5-description">{information.articlePreface}</div>
          </div>
        </>
      }
   

    </div>
  )
}
