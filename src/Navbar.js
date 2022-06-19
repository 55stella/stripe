import React from 'react'
import  sublinks from './data'
import { useGlobalContext } from './context'

import logo from './image/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
const {opensidebar, openSubmenue, closeSubmenue} = useGlobalContext()
const handleSubmenue =(e)=>{
const page = e.target.textContent
let left = e.target.getBoundingClientRect().left
let right = e.target.getBoundingClientRect().right
let center = (left + right)/2
const bottom = e.target.getBoundingClientRect().bottom 
const finalBottom = bottom - 3
  openSubmenue(page,{center, finalBottom})

}
    
const handleClose=(e)=>{
  if(! e.target.classList.contains('link-btn')){
    closeSubmenue()
  }
}
    
  return (
    <nav onMouseMove={handleClose}>
     <div className="center">
        <div className='stripe-icon'>
            <img src={logo} alt="stripe" />
            <button className='btn' onClick={opensidebar}>
                <FaBars size={20}/>
            </button>
        </div>
     <ul className='nav-links'>
         <li><button className='link-btn' onMouseOver={handleSubmenue}>products</button></li>
         <li><button className='link-btn' onMouseOver={handleSubmenue}>developers</button></li>
         <li><button className='link-btn' onMouseOver={handleSubmenue}>company</button></li>
         
     </ul>
     <button className='sign-in-btn'>signin</button>
     </div>

    </nav>
  )
}

export default Navbar