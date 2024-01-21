import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story({information}) {

  return (
      <div className="story">
          
          <div className="story-left">
            <div className="story-category">{information && information.articleCategory}</div>
            <div className="story-title">{information && information.articleTitle}
            </div>
            <div className="story-description">{information && information.articlePreface}</div>
          </div>
          <div className="story-right">
            {information &&
            <Link to={`/Article/${information.articleId}`}>
            <div className="story-image-container">
            <img className='story-image' src={information.articleMainImage} alt="" />
            </div>
            </Link>}
            
          </div>
      </div>
  )
}
