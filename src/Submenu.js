import React, { useRef, useEffect, useState} from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
   const{openSubmenue, IsSubmenue, location, page:[{page,links}]} = useGlobalContext()
   const containerRef = useRef()
   const[col, setColumn] = useState('two-columns')
   
 useEffect(()=>{
    setColumn('two-columns')


    const container = containerRef.current
    const{center, bottom} = location
    container.style.left = `${center}px`
    container.style.top  =  `${bottom}px`

    if(links.length ===3){
       setColumn('three-columns')
    }
    else if(links.length >3){
       setColumn('four-columns')
    }
    else{
       setColumn('two-columns')
    }
 },[location, links])

   return <section className={`${IsSubmenue ? 
   'menu-cover show ': 'menu-cover'}`} ref ={containerRef}>
      <h4>{page}</h4>
      <article className={`links ${col}`}>
         {links.map((link, index)=>{
            const{label, icon, url} = link
            return <a href={url} key ={index} > 
            {icon}
            {label}
            </a>
         })}
      </article>

         
       
   </section>
  
       
          

}

export default Submenu