import React from 'react'
import { IoMdMenu } from "react-icons/io";
export default function Nav() {
  return (
    <>
    <nav className=' bg-amber-300 h-7'>
      <ul className="md:flex flex-wrap hidden gap-6 justify-center">
        <li>All CATEGORIES</li>
        <li>TODAY DEALS</li>
        <li>ELECTRONICS</li>
        <li>CLOTHINGS</li>
        <li>COMPUTERS</li>
        <li>FORNITURES</li>
        <li>MOM & BABY</li>
        <li>BOOKS & MORE</li>
      </ul>
          <IoMdMenu className='md:hidden'  />
    </nav>
    </>
  )
}
