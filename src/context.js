import { useContext, useState } from "react";
import React from "react";
import sublinks from './data'
// set up a state value for data.js
// filter by category and update the state value
// render the filtered result
const AppContext = React.createContext()
const AppProvider =({children})=>{
    const[IsSidebarOpen, setIssidebaropen] =useState(false)
    const[IsSubmenue, setIsSubmenue] =useState(false)
    const[location, setLocation] = useState({})
    const[page, setPage] = useState([{page:'', links:[]}])

    const opensidebar =()=>{
     setIssidebaropen(true)

    }

    const closesidebar =()=>{
     setIssidebaropen(false)

    }

    const openSubmenue=(text, cordinates)=>{
        const page = sublinks.filter(links=>links.page ===text)
        setPage(page)

        setLocation(cordinates)
        setIsSubmenue(true)
    }
    const closeSubmenue=()=>{
        setIsSubmenue(false)
    }

 


return<AppContext.Provider value ={{opensidebar,
     closesidebar, 
     openSubmenue, closeSubmenue, IsSidebarOpen, IsSubmenue, page, location}}  >
        {children}
    </AppContext.Provider>
    
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppProvider}