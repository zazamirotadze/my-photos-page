import React, {useEffect, useState} from 'react'
import Button from './Button'
import { useParams } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaWindowClose} from "react-icons/fa";
import Burger from './Burger';

const Buttons = () => {
    const [namesArray, setNamesArray] = useState([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const params = useParams();
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
            setNamesArray(newArray)
        })
    },[])
    useEffect(() => {
        function handleResize() {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const renderButtons = namesArray.map((element)=> 
        <Button 
            key={element.name} 
            name={element.name} 
            nameGeo={element.nameGeo} 
            params={params} 
        />)


  return (
        <div className='buttons' >
            { screenWidth > 900 &&  renderButtons} 
            { screenWidth <= 900 && <Burger>{renderButtons}</Burger>}
        </div>
  )
}

export default Buttons