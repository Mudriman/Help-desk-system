import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';
import './navbar.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from '../../../context/darkModeContext';
import NavNotice from '../../navNotice/NavNotice';
import NavMessage from '../../navMessage/NavMessage';
import NavAvatar from '../../navAvatar/NavAvatar';
import FullScreenToggle from '../fullScreen/FullScreenToggle';


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {dispatch} = useContext(DarkModeContext);
    
    return (
        isAuth 
            ? <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder='Search...'/>
                        <SearchOutlinedIcon/>
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageOutlinedIcon className='icon'/>
                            English
                        </div>
                        <div className="item">
                            <DarkModeOutlinedIcon 
                                className='icon' 
                                onClick={()=>dispatch({type:"TOGGLE"})}
                            />
                        </div>
                        <div className="item">
                            <FullScreenToggle className='icon'/>
                        </div>
                        <div className="item">
                            <NavNotice/>
                        </div>
                        <div className="item">
                            <NavMessage/>
                        </div>

                        <div className="item">
                            <NavAvatar/>
                        </div>
                    </div>
                </div>
            </div>
            :   <div>
        </div>
    );
};

export default Navbar;