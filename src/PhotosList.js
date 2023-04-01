import { useState, useEffect } from "react";
import React from 'react'
import Photo from "./Photo";
import { useParams } from 'react-router-dom';
import Pegination from "./Pegination";
const PhotosList = () => {
  const [photosData, setPhotosData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 9
  const [currentPageData, setCurrentPageData] = useState([])
  const params = useParams();
  
  function changeCurrentPage(number) {
    setCurrentPage(number)
  }

  useEffect(()=>{
    fetch(`https://gold-angry-earthworm.cyclic.app/${params.categoryName?params.categoryName:"all"}`)
    .then((x) => x.json())
    .then((y) => setPhotosData(y) )
    changeCurrentPage(1)
  },[params.categoryName])

  useEffect(() => {
    if (photosData.data) {
      const lastPostIndex = currentPage * postPerPage
      const firstPostIndex = lastPostIndex - postPerPage
      const currentPosts = photosData.data.slice(firstPostIndex, lastPostIndex)
      setCurrentPageData((currentPosts))
    }
  }, [currentPage, photosData.data, postPerPage])

  const renderPhotos = currentPageData.map((element)=> 
    <Photo key={element.id} data={element} params={params} />)
  return (
    <>
    <div className="photo-list">
      {currentPageData.length > 0 && renderPhotos} 
    </div>
    {photosData.data && 
      <Pegination 
        totalPosts={photosData.data.length} 
        postPerPage={postPerPage} 
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage} 
      />}
    </>
  )
}

export default PhotosList