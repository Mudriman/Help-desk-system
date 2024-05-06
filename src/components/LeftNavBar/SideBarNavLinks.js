import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context';

export const NavLinks = styled(NavLink)`
position: relative;
 color: #fff;
 padding: 15px 20px;
 text-decoration: none;
 display: flex;
 align-items: center;
 justify-content: left;
 margin: 2px 10px;
 border-radius: 10px;
 &:hover {
    background: #ffffff24;
 }
 &.active {
    background: #ffffff;
    color: #4297ff;
    transition: all 0.4s ease;
 }
`;

const Icon = styled.div`
 margin-right: 14px;
 font-size: 20px;
`;

const Newest = styled.div`
 position: absolute;
 right: 20px;
 border-radius: 20px;
 font-size: 12px;
 font-weight: bold;
 text-shadow: 2px 2px 5px rgb(0 0 0 / 91%);
`;

const NavBtn = styled.div`
 position: relative;
 color: #fff;
 padding: 15px 20px;
 text-decoration: none;
 display: flex;
 align-items: center;
 justify-content: left;
 margin: 4px 10px;
 border-radius: 10px;
 cursor: pointer;
 background: ${(props) => props.open && "#fff"};
 &:hover {
    background: #ffffff24
 }
`;

const Arrow = styled.div`
 position: absolute;
 top: 50%;
 right: 20px;
 transform: translate(0, -50%);
 > span {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 6px;
    border-color: transparent transparent transparent #ffffff;
    pointer-events: none;
    transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(90deg)")};
    border-left: ${(props) => !props.open && "6px solid #ffffff"};
    transition: all 0.2s;
 }
`;

const SubMenu = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 background: #00000029;
 overflow: hidden;
 height: ${(props) => (props.opened === "true" ? props.tall * 59 + 20: 0)}px;
 transition: all 0.4s ease;
 padding: ${(props) => (props.opened === "true" ? "10px 0px" : "0px")}
 margin: 2px 0 2px;
`;

const SubLinks = styled(NavLink)`
 color: #fff;
 padding: 0px 20px;
 height: 55px !important;
 text-decoration: none;
 display: flex;
 align-items: center;
 justify-content: left;
 margin: 2px 10px;
 border-radius: 10px;
 > span {
    margin-left:14px;
 }
 &:hover{
    background: #ffffff24;
 }
 &.active {
    background: #fff;
    color: #4297ff;
    transition: all 0.4s;
 }
`;

const SideBarBtns = ({to, icon, title, span, subBtn, handleClick, onClicks}) => {
    const [openSubMenu, setOpenSubMenu] = useState(false);

    const handleSubMenu = () => {
        if (subBtn !== undefined) {
            setOpenSubMenu(!openSubMenu);
        }
    }
    const {isAuth, setIsAuth} = useContext(AuthContext); 
    
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    
    return (
        <li>
            {subBtn === undefined ? (
            <NavLinks
                strict="true"
                to={{
                    pathname: to
                }}
                onClick={onClicks ? logout : handleClick}
            >
                <Icon>{icon}</Icon>
                {title}
                {span !== undefined && <Newest>{span}</Newest>}
            </NavLinks>
            ) : (
                <NavBtn onClick={() => handleSubMenu()}>
                    <Icon>{icon}</Icon>
                    {title}
                    {span !== undefined && <Newest>{span}</Newest>}
                    {subBtn !== undefined && (
                        <Arrow open={!openSubMenu && "open"}>
                            <span></span>
                        </Arrow>
                    )}
                </NavBtn>
            )}

            <SubMenu
                tall={`${subBtn !== undefined && subBtn.length}`}
                opened={openSubMenu ? "true" : "false"}
            >
                {subBtn !== undefined && 
                subBtn.map((btn, i) =>(
                    <div key={i}>
                        <SubLinks
                            key={i}
                            to={to + "/" + btn.toLowerCase()}
                            onClick={handleClick}
                        >
                            {btn.slice(0, 2).toUpperCase()}
                            <span>{btn}</span>
                        </SubLinks>
                    </div>
                ))}
            </SubMenu>
        </li>
    );
};

export default SideBarBtns;