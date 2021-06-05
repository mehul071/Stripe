import React from 'react'
import sublinks from './data'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Submenu from './Components/Submenu'
import {AppProvider, useGlobalContext} from './Context'

function App() {
  const data = useGlobalContext();
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <Submenu/>
    </>
  );
}

export default App;
