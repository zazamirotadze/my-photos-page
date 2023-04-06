import React, { createContext, useState } from 'react'

export const PhotosPageContext = createContext({})


const PhotosPageProvider = ({ children }) => {
    const [currentPageData, setCurrentPageData] = useState([])
    const [namesArray, setNamesArray] = useState([])
    const [detailData, setDetailData] = useState({})

    function fetchCurrentPageData(data){
        setCurrentPageData(data)
    }
    function fetchNamesArrayData(data){
        setNamesArray(data)
    }
    function fetchDetailData(data){
        setDetailData(data)
    }
  return (
    <PhotosPageContext.Provider 
        value={{
            fetchCurrentPageData,
            fetchNamesArrayData,
            fetchDetailData,
            namesArray,
            currentPageData,
            detailData
        }} >
        {children}
    </PhotosPageContext.Provider>
  )
}

export default PhotosPageProvider