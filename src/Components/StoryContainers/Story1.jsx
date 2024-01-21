import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Story1({information}) {

  return (
    <>
            {information &&
                <Link to={`/Article/${information.articleId}`}>
                    <div className="story1-image-wrapper">
                        <img className='story1-image' src={information.articleMainImage} alt="" />
                    </div>
                    <div className="story1-overlay"></div>
                    <div className="story1-details">
                        <div className="story1-subtitle">{information.articleCategory}</div>
                        <div className="story1-title">{information.articleTitle}</div>
                        <div className="story1-description">{information.articlePreface}</div>
                        <div className="story1-view-more-container">
                        <div className="story1-view-more-text">View More</div>
                        <svg className='story1-view-more-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='story1-view-more-svg-path' d="M18 12L18.7071 11.2929L19.4142 12L18.7071 12.7071L18 12ZM6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11V13ZM14.7071 7.29289L18.7071 11.2929L17.2929 12.7071L13.2929 8.70711L14.7071 7.29289ZM18.7071 12.7071L14.7071 16.7071L13.2929 15.2929L17.2929 11.2929L18.7071 12.7071ZM18 13H6V11H18V13Z" fill="white"/>
                        </svg>
                        </div>
                    </div>  
                </Link>
            }
    </>

  )
}
