import React from 'react'

const Pegination = ({totalPosts, postPerPage, currentPage, changeCurrentPage}) => {
    let pages = []
    for(let i=1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
  return (
    <div className='pegination-list' >
      {
        pages.map((page, index)=>{
          return <div className={currentPage === page ? "selectedBtn" : ""  }  key={index} onClick={()=>changeCurrentPage(page)} >{page}</div>
        })
      }
    </div>
  )
}

export default Pegination