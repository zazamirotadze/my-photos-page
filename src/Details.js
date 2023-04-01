import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
  const [detailData, setDetailData] = useState({})
  const params = useParams();
  useEffect(()=>{
    fetch(`https://gold-angry-earthworm.cyclic.app/data/${params.id}`)
    .then((x) => x.json())
    .then((y) => setDetailData(y) )
  },[params.id])
  return (
    <div className='details' >
      <h2>
      {params.lang === "en" ? detailData.name : detailData.nameGeo }
      </h2>
      <div>
        <img src={detailData.url} alt="photoImg" />
      </div>
    </div>
  )
}

export default Details