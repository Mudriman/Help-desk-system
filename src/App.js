import React, {useContext, useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import TheComponent from './components/LeftNavBar/TheComponent';
import "./styles/dark.scss";
import {DarkModeContext} from "./context/darkModeContext";

//import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css'

//import bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js';

import Ham from "./components/LeftNavBar/Hamburger";
import BackToTop from './components/UI/backToTop/BackToTop';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState();
  const {darkMode} = useContext(DarkModeContext);
  
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
    <div className={darkMode ? "app dark" : "app"}>
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
          <BackToTop/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
