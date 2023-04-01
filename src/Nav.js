import React from 'react'
import Buttons from './Buttons';
import { Outlet } from 'react-router-dom';
import Languages from './Languages';
const Nav = () => {
  return (
    <>
        <Languages/>
        <Buttons/>
        <Outlet/>
    </>
  )
}

export default Nav