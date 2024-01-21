import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story16({information}) {

  return (
    <div className="story16-container">
        {information &&
          <>
            <div className="story16-image-wrapper">

            <Link to={`/Article/${information.articleId}`}>

            <img className='story16-image' src={information.articleMainImage} alt="" />
            </Link>
            </div>
            <div className="story16-details">
              <div className="story16-category">{information.articleCategory}</div>
              <div className="story16-title">{information.articleTitle}</div>
              <div className="story16-description">{information.articlePreface}</div>
            </div>
          </>
        }
    </div>
  )
}
