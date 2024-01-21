import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story3({information}) {

  return (
    <div  className="story3-container">
        {
          information &&
          <>
           
              <Link to={`/Article/${information.articleId}`}>

            <div className="story3-category">{information.articleCategory}</div>
            <div className="story3-title">{information.articleTitle}</div>
            <div className="story3-description">{information.articlePreface}</div>
              </Link>
          </>
        }
       
  
    </div>
  )
}