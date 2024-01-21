import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story13({information}) {

  return (
    <div className="story13-container">
        {information &&
          <>
          <div className="story13-image-wrapper">

            <Link to={`/Article/${information.articleId}`}>

              <img className='story13-image' src={information.articleMainImage} alt="" />
            </Link>
          </div>
            <div className="story13-category">{information.articleCategory}</div>
            <div className="story13-title">{information.articleTitle}</div>
            <div className="story13-description">{information.articlePreface}</div>
          </>
        }
    </div>
  )
}
