import React from 'react'
import { Link } from 'react-router-dom'



const Photo = ({data, params, fetchCurrentPageData}) => {
  const languageParam =  params.lang === "en" ? "en" : "ka"
  return (
    <Link 
      to={`/specificPhoto/${data.id}/${languageParam}`} 
      className='removeDefaultLinkStyle' 
      onClick={()=>fetchCurrentPageData([])}
    >
      <div className='photo'>
          <div>
              <img src={data.url} alt="photoImg"/>
          </div>
          <p>
            {params.lang === "en" ? data.name : data.nameGeo }
          </p>
      </div>
    </Link>
  )
}

export default Photo