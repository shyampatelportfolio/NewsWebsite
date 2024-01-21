import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FooterBoxImage() {
    const  [info, setInfo] = useState([])
    useEffect(() => {
      const data = [
        {
          name : "Image25",
          link : 25
        },
        {
          name : "Image26",
          link : 28
        },
        {
          name : "Image104",
          link : 107
        },
      ]
      setInfo(data)
    }, [])
 
  return (
    <div className="footer-box-gallery">
        <div className="footer-box-gallery-subtitle">NEWS</div>
        <div className="footer-box-gallery-images">
            {info.map((x,i) => {return (

                <div key={i} className="footer-box-gallery-image">
                  <Link to={`/Article/${x.link}`}>
                    <img src={`/Images/${x.name}.jpg`} alt="" />
                  </Link>
                </div>
            )
            })}
        </div>
    </div>
  )
}
