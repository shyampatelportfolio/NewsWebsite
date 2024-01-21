import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function FooterBoxList({items}) {
    const  [info, setInfo] = useState([])

    useEffect(() => {
      if(items !== undefined){
        setInfo(items.items)
      }
    }, [items])

 
  return (
    <div className="footer-box-list">
        <div className="footer-box-list-subtitle">{items !== undefined && items.title}</div>
        <div className="footer-box-list-tags">
            {info.map((x,i) => {return (
                <div key={i} className="footer-box-list-tag">
                  <Link to={`/Article/${x.link}`}>
                    {x.name}
                  </Link>
                </div>
            )
            })}
        </div>
    </div>

  )
}
