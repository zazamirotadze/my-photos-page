import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";


export default function Burger({children, }) {
  const [showClose, setShowClose] = useState(false);
  const ref = useRef();
  
  const openMenu = () => {
    setShowClose("skew-menu")
    setTimeout(() => {
        setShowClose("skew-close")
    }, 900);
    setTimeout(() => {
        setShowClose(true);
    }, 950);
  };
  const closeMenu = () => {
    setShowClose("skew-close")
    setTimeout(() => {
        setShowClose("skew-menu")
    }, 900);
    setTimeout(() => {
        setShowClose(false);
    }, 950);
  };
  useEffect(() => {
    let handler = (e) => {
      const inside = ref.current.contains(e.target)
      if( showClose === true &&  !inside ) {
          closeMenu()
      } 
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  });


  return (
    <div className="burger-container">
      <div>
        {(showClose===false ||  showClose==="skew-menu") ? (
          <GiHamburgerMenu onClick={openMenu} className={ showClose === false ? "burger-menu" :  "burger-menu  rotate-menu"} size={70} />
        ) : (
          <FaWindowClose onClick={closeMenu} className={ showClose === true ? "close-icon" :  "close-icon  rotate-close"} size={70} />
        )}
      </div>
    <div className={ showClose === true ?  "menu openedMenu" : "menu" } ref={ref} >
        {children}
    </div>
    </div>
  );
}