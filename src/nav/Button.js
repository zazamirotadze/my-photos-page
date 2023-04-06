import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, nameGeo, params, closeMenu, fetchDetailData}) => {
  const modifiedName = name.toLowerCase().replace(/\s+/g, '')
  const buttonClass = `${modifiedName === params.categoryName ? "button selectedBtn" : "button" }`
  const languageParam =  params.lang === "en" ? "en" : "ka"
  return (
   <Link 
        to={`/${modifiedName}/${languageParam}`}  
        className='removeDefaultLinkStyle' 
        onClick={()=>fetchDetailData([])}
    >
        <div className={buttonClass} >
            { params.lang === "en" ? name : nameGeo }
        </div>
   </Link> 
  )
}

export default Button