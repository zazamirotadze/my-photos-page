import React, {useEffect, useState, useContext} from 'react'
import Button from './Button'
import { useParams } from 'react-router-dom';
import Burger from './Burger';
import { PhotosPageContext } from '../context/Photos-page-context';
const Buttons = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const params = useParams();
    const myContextValue = useContext(PhotosPageContext);
    const fetchNamesArrayData = myContextValue.fetchNamesArrayData
    useEffect(()=>{
        fetch("https://gold-angry-earthworm.cyclic.app/data")
        .then((x) => x.json())
        .then((y) =>  {
            const sortedData = y.sort((a, b) => a.name.localeCompare(b.name));
            const newArray = sortedData.map((item) => {
            return {
              name: item.name,
              nameGeo: item.nameGeo
                };
            })
            fetchNamesArrayData(newArray)
        })
    },[])
    useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    const renderButtons = myContextValue.namesArray.map((element)=> 
        <Button 
            key={element.name} 
            name={element.name} 
            nameGeo={element.nameGeo} 
            params={params} 
            fetchDetailData={myContextValue.fetchDetailData}
        />)
  return (
    <div className='buttons'>
      { 
        ((myContextValue.namesArray.length && myContextValue.currentPageData.length) || (myContextValue.namesArray.length && params.id && Object.keys(myContextValue.detailData).length > 0 ))
        ? ( 
          (screenWidth > 900 && renderButtons) || (screenWidth <= 900 && <Burger>{renderButtons}</Burger>)
        )
        : null
      }
    </div>
  )
}

export default Buttons