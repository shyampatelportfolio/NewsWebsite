import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Story12({information}) {
    return (
    
        <div  className="story12-container">
          {information &&
            <>
            <div className="story12-image-wrapper">
              <Link to={`/Article/${information.articleId}`}><img className='story12-image' src={information.articleMainImage} alt="" /></Link>
            </div>
              <div className="story12-details">
                <div className="story12-category">{information.articleCategory}</div>
                <div className="story12-title">{information.articleTitle}</div>
                <div className="story12-description">{information.articlePreface}</div>
              </div>
            </>
          }
            
    
        </div>
      )
}
