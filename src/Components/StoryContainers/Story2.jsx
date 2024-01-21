import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Story2({information}) {

  return (
    <div className="story2-container">
        {information &&
          <>
            
            <div className="story2-details">
              <div className="story2-category">{information.articleCategory}</div>
              <div className="story2-title">{information.articleTitle}</div>
              <div className="story2-description">{information.articlePreface}</div>
            </div>
              <div className="story2-image-wrapper">
            <div className="story2-image" >
            <Link to={`/Article/${information.articleId}`}>

                <img src={information.articleMainImage} alt="" />
            </Link>
            </div>
              </div>
          </>
        }
    </div>
  )
}
