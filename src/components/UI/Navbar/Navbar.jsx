import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';
import './navbar.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        isAuth 
            // ?   <div className="navbar">
            // <MyButton onClick={logout}>
            //     Выйти
            // </MyButton>
            // <div className="navbar__links">
            //     <Link to="/about">О сайте</Link>
            //     <Link to="/posts">Посты</Link>
            // </div>
            ? <div className="navbar">
                <div className="marginer">
                    
                </div>
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
                            <DarkModeOutlinedIcon className='icon'/>
                        </div>
                        <div className="item">
                            <FullscreenExitOutlinedIcon className='icon'/>
                        </div>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className='icon'/>
                            <div className="counter">1</div>
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className='icon'/>
                            <div className="counter">2</div>
                        </div>
                        <div className="item">
                            <ListOutlinedIcon className='icon'/>
                        </div>
                        <div className="item">
                            <img
                                src="https://i0.wp.com/blogs.embarcadero.com/wp-content/uploads/2020/07/pexels-photo-941693.jpeg?ssl=1"
                                alt=""
                                className="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
            :   <div>
        </div>
    );
};

export default Navbar;