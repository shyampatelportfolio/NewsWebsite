import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBar({color}) {

  const dateRef = useRef()

 
  useEffect(() => {
    const date = getDate()
    dateRef.current.textContent = date
  }, [])


  function getDate(){
    var monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const monthName = monthNames[month];
    const year = today.getFullYear()
    const string = getDayWithSuffix(day) + ' ' + monthName +  ' ' + year
    return string
  }
  function getDayWithSuffix(day) {
    if (day >= 11 && day <= 13) {
        return day + "th";
    } else {
        switch (day % 10) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }
}
  return (
    <div className="navbar-container" >
        <div className="navbar-first-row">
          <div ref={dateRef} className="navbar-date"></div>
          <div className="navbar-title"><Link to="/">Panaroma Express</Link></div>
          <Link to="/Compose">
          <div className="navbar-right selected">
            <div className='navbar-item right'>Compose</div>
            <div className="account-image">
            </div>
          </div>
          </Link>
        </div>
        <div className="navbar-links-container">
          <div className="navbar-link"><Link to="/">Home</Link></div>
          <div className="navbar-link"><Link to="/Category/World">World</Link></div>
          <div className="navbar-link"><Link to="/Category/Politics">Politics</Link></div>
          <div className="navbar-link"><Link to="/Category/Science">Science</Link></div>
          <div className="navbar-link"><Link to="/Category/Food">Food</Link></div>
          <div className="navbar-link"><Link to="/Category/Sports">Sports</Link></div>
          <div className="navbar-link"><Link to="/Category/Travel">Travel</Link></div>
          <div className="navbar-link"><Link to="/Category/Business">Business</Link></div>
        </div>
    </div>
  )
}
