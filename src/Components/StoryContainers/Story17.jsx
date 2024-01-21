import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story17({information}) {

  return (
    <div className="story17">
        {information && 
            <>
                <div className="story17-left">
                    <div className="story17-category">{information.articleCategory}</div>
                    <div className="story17-title">{information.articleTitle}</div>
                    <div className="story17-description">{information.articlePreface}</div>
                </div>
                <div className="story17-right">
                  <div className="story17-image-wrapper">

                <Link to={`/Article/${information.articleId}`}>

                  <img className='story17-image' src={information.articleMainImage} alt="" />
                </Link>
                  </div>
                </div>
                <div className="story17-date">1st October 2023</div>
            </>
        }

    </div>
  )
}
