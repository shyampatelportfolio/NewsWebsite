import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story15({information}) {

  return (
    <div className="story15">
        <div className="story15-left">
          <div className="story15-category">{information && information.articleCategory}</div>
          <div className="story15-title">{information && information.articleTitle}
          </div>
          <div className="story15-description">{information && information.articlePreface}</div>
        </div>
        <div className="story15-right">
          {information &&
          <Link to={`/Article/${information.articleId}`}>
            <div className="story15-image-container">

              <img className='story15-image' src={information.articleMainImage} alt="" />
            </div>
          </Link>}
          
        </div>
    </div>
  )
}
