import React from 'react'
import { useGlobalContext } from './context'
import sublinks from './data'
import { FaTimes } from 'react-icons/fa'

const SideBar = () => {
    const{IsSidebarOpen,closesidebar} = useGlobalContext()



    return (
      <section  className= {`${IsSidebarOpen ? 'sidebar-overlay show': 'sidebar-overlay'}`}>
        <div className='sidebar'>
          {sublinks.map((item, index)=>{
            const{page, links} =  item
            return <article key ={index} className ='side-links'>
              <h4>{page}</h4>
              <div className='links' key ={index}>
                {links.map((link, index)=>{
                const{label, icon, url} = link

                
                return <a href={url}>
                        {icon}
                        {label}
                      </a>

              
              })}
              </div>
            </article>
            

          })}

    <button className='sidebar-btn' onClick={closesidebar}><FaTimes size={32}/></button>
          
        </div>
      
  
  
         
            
      </section>
    )
  }

export default SideBar