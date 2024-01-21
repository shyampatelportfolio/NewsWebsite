import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Story11({information}) {
 
  return (
    <div className="story11-container">
      {information && 
        <>  
          <div className="story11-image-wrapper">

          <Link to={`/Article/${information.articleId}`}>

          <img className='story11-image' src={information.articleMainImage} alt="" />
          </Link>
          </div>

          <div className="story11-details">

            <div className="story11-category">{information.articleCategory}</div>
            <div className="story11-title">{information.articleTitle}</div>
            <div className="story11-description">{information.articlePreface}</div>
          </div>

        </>
      }
   

    </div>
  )
}
