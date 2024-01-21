import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ArticleSubmitRedirect() {


    const location = useLocation()
    const [nav, setNav] = useState('/')
    const navigate = useNavigate()
    useEffect(() => {
      window.scrollTo(0, 0);
        if(location) setNav(`/Article/${location.state}`)
        setTimeout(() => {
            navigate(`/Article/${location.state}`)
        }, 3000);
   
    }, [])
  return (
    <div className="article-submit-redirect-container">
        <div className="article-submit-redirect-title">Article Submitted! Redirecting...</div>
        <div className="article-submit-redirect-description">
        Thank you for submitting your article! Your contribution is valuable to us. 
        Please wait a moment as we redirect you to the confirmation page. 
        If the redirection doesn't occur, <Link to={nav}><span className='click-link'>click here.</span></Link> 
   
        </div>
        

    </div>
  )
}
