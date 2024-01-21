import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Story4({information}) {
 
  return (

    <div  className="story4-container">
      {information &&
        <>
        <div className="story4-image-wrapper">

          <Link to={`/Article/${information.articleId}`}><img className='story4-image' src={information.articleMainImage} alt="" /></Link>
        </div>
          <div className="story4-details">
            <div className="story4-category">{information.articleCategory}</div>
            <div className="story4-title">{information.articleTitle}</div>
            <div className="story4-description">{information.articlePreface}</div>
          </div>
        </>
      }
        

    </div>
  )
}
