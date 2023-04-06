import React from 'react'
import { useState, useEffect, useRef } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {FaWindowClose} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Languages = () => {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams();
  const ref = useRef();
  function closeBtn() {
    setIsOpen("fade")
    setTimeout(() => {
      setIsOpen(false)
    }, 900);
  }
  useEffect(() => {
    let handler = (e) => {
      const inside = ref.current.contains(e.target)
      if( isOpen === true && !inside ) {
          closeBtn()
      } 
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  });



  const urlForeng = params.id ? `/specificPhoto/${params.id}/en` : (params.categoryName ? `/${params.categoryName}/en` : '/all/en')
  const urlForka = params.id ? `/specificPhoto/${params.id}/ka` : (params.categoryName ? `/${params.categoryName}/ka` : '/all/ka')
  
  return (
    <div className='languages' >
        <span className={ params.lang==="en" ? "fi fi-gb" : "fi fi-ge"} onClick={() => setIsOpen(true)}  ></span>
        <span onClick={() => setIsOpen(true)} >&#x2193;</span>
        <div className={isOpen===true?"isOpen": isOpen==="fade"? "fadeOut" : ""} ref={ref}   >
            <FaWindowClose className='closeBtn' onClick={() => closeBtn()} />
            <Link  to={urlForka} onClick={() => closeBtn()}  className='removeDefaultLinkStyle'>
              <div className={ params.lang==="en" ? "" : 'selectedBtn'}>ქართული</div>
            </Link> 
            <Link  to={urlForeng} onClick={() => closeBtn()}  className='removeDefaultLinkStyle'>
              <div className={ params.lang !=="en" ? "" : 'selectedBtn'} >English</div>
            </Link>
        </div>
        
    </div>
  )
}

export default Languages

