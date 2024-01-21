import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story9({information}) {

  return (
    
    <div  className="story9-container">
      {information &&
        <>
          <div className="story9-image-wrapper">
          <Link to={`/Article/${information.articleId}`}>
            <img className='story9-image' src={information.articleMainImage} alt="" />
            </Link>
          </div>
            
          <div className="story9-details">
            <div className="story9-category">{information.articleCategory}</div>
            <div className="story9-title">{information.articleTitle}</div>
            <div className="story9-description">{information.articlePreface}</div>
          </div>
        </>
      }
        

    </div>
  )
}


