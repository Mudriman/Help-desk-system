import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import TheComponent from './components/LeftNavBar/TheComponent';

import Ham from "./components/LeftNavBar/Hamburger";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState();
  
  const handleClick = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
      }}>
        <BrowserRouter>
        <Ham open={open} handleClick={handleClick}/>
          <TheComponent
            open={open}
            setOpen={setOpen}
            handleClick={handleClick}
          />
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;