import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ArticleRecommendation({information}) {
 
  return (
    <div className="article-recommendation-container">
        {information &&
          <>
          <div className="article-recommendation-image-wrapper">
            <Link to={`/Article/${information.articleId}`}>
              <img  className='article-recommendation-image' src={information.articleMainImage} alt="" />
            </Link>
          </div>
            <div className="article-recommendation-category">{information.articleCategory}</div>
            <div className="article-recommendation-title">{information.articleTitle}</div>
            <div className="article-recommendation-description">{information.articlePreface}</div>
          </>
        }
    </div>
  )
}
