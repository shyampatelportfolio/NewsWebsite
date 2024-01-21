import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story14({information}) {
  return (
   
    <>
        <div className="story14-details">
            {information && 
            <>
                <div className="story14-details-category">{information.articleCategory}</div>
                <div className="story14-details-title">{information.articleTitle}</div>
                <div className="story14-details-description">{information.articlePreface}</div>
            </>
            }
        </div>
        <div className="story14-image-wrapper">

        <div  className="story14-image">
            {information && <Link to={`/Article/${information.articleId}`}><img src={information.articleMainImage} alt="" /></Link>}
        </div>
        </div>
    </>

  )
}
