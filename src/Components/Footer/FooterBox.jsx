import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function FooterBox({width, items}) {
    const  [info, setInfo] = useState([])
    // useEffect(() => {
    //   const data = [
    //     "World", "Politics", "Business", "Science", "Sports", "Travel",
    //      "Food"
    //   ]
    //   setInfo(data)
    // }, [])
    useEffect(() => {
      if(items !== undefined){
        setInfo(items.items)
      }
    }, [items])

  return (
    <div style={width? {width : '40vw'} : {width : '20vw'}} className="footer-box">
        <div className="footer-box-subtitle">{items !== undefined && items.title}</div>
        <div className="footer-box-tags">
            {info.map((x,i) => {return (
                <div key={i}  className="footer-box-tag">
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
