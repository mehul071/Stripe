import React,{useState, useContext} from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children})=>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [issubmenuOpen, setIssubmenuOpen] = useState(false);
  const [location,setLocation] = useState({})
  const [page,setpage] = useState({page:'',links:[]}) 
  const openSidebar = () =>{
    setIsSidebarOpen(true);
  }
  const closeSidebar = () =>{
    setIsSidebarOpen(false);
  }
  const opensubmenu = (text,coordinates) =>{
    const page = sublinks.find((link)=> link.page === text);
    setpage(page);
    setLocation(coordinates);
    setIssubmenuOpen(true);
  }
  const closesubmenu = () =>{
    setIssubmenuOpen(false);
  }  
  return ( <AppContext.Provider 
    value={{
      isSidebarOpen,
      issubmenuOpen,
      closeSidebar,
      opensubmenu,
      closesubmenu,
      openSidebar,
      location,
      page,
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () =>{
  return useContext(AppContext);
}