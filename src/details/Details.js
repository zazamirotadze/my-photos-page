import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CircleLoader } from "react-spinners";
import { PhotosPageContext } from '../context/Photos-page-context';
const Details = () => {
  const params = useParams();
  const myContextValue = useContext(PhotosPageContext);
  useEffect(()=>{
    fetch(`https://gold-angry-earthworm.cyclic.app/data/${params.id}`)
    .then((x) => x.json())
    .then((y) => myContextValue.fetchDetailData(y) )
  },[params.id])
  if (Object.keys(myContextValue.detailData).length === 0 || myContextValue.namesArray.length === 0 ) {
    return <CircleLoader className='loader' />;
  }
  return (
      <div className='details' >
        <h2>
        {params.lang === "en" ? myContextValue.detailData.name : myContextValue.detailData.nameGeo }
        </h2>
        <div>
          <img src={myContextValue.detailData.url} alt="photoImg" />
        </div>
      </div>
  )
}

export default Details