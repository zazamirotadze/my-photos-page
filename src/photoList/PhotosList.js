import { useState, useEffect, useContext } from "react";
import React from 'react'
import Photo from "./Photo";
import { useParams } from 'react-router-dom';
import Pegination from "./Pegination";
import { CircleLoader } from "react-spinners";
import { PhotosPageContext } from "../context/Photos-page-context";

const PhotosList = () => {
  const [photosData, setPhotosData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 9
  const params = useParams();

  const myContextValue = useContext(PhotosPageContext);
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
      myContextValue.fetchCurrentPageData(currentPosts)
    }
  }, [currentPage, photosData.data, postPerPage])

  const renderPhotos = myContextValue.currentPageData.map((element)=> 
    <Photo key={element.id} data={element} params={params} fetchCurrentPageData={myContextValue.fetchCurrentPageData} />)
  return (
    <>
    { (myContextValue.currentPageData.length !== 0  && myContextValue.namesArray.length !== 0) ? 
    (<>
    <div className="photo-list">
      {renderPhotos} 
    </div>
    {photosData.data && 
      <Pegination 
        totalPosts={photosData.data.length} 
        postPerPage={postPerPage} 
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage} 
      />}
      </>):<CircleLoader className='loader' />}
    </>
  )
}

export default PhotosList