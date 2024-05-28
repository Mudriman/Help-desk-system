import React, { useLayoutEffect, useContext } from 'react';

import styled from 'styled-components';

import SideBarButton from "./SideBarNavLinks";

import Logo from "./Logo";
import Footer from "./Footer";
import { Scrollbar } from 'react-scrollbars-custom';
import { AuthContext } from '../../context';


const SideBarWrapper = styled.div`
 position:fixed;
 top: 0;
 left: 0;
 width: 250px;
 height: 100vh;
 display: block;
 z-index: 2;
 transition: transform 0.3s ease-in-out;
 @media (max-width: 775px) {
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-102%)")};
 }
`;


const UnorderList = styled.ul`
 position: relative;
 list-style: none;
 padding: 0;
 display: block;
 transition: all 0.5s ease;
`;

const NegativeSidebar = styled.div`
 z-index: 2;
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 width: 100vw;
 height: 100vh;
 pointer-events: auto;
 background-color: rgba(0, 0, 0, 0.5);
 opacity: ${({ open }) => (open ? "1" : "0")};
 transition: opasity 224ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
 @media (max-width: 775px) {
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
 }
 @media (min-width: 775px) {
  background-color:none;
  pointer-events: none;
 }
`;

const makeButtons = [
    {
        to: "/",
        icon: <i className="fa-solid fa-house"></i>,
        title: "Главная"
    },
    {
        to: "/profile",
        icon: <i className="fa-solid fa-id-card"></i>,
        title: "Профиль",
        subBtn: ["Пароль", "Почта", "Аккаунт"]
    },
    {
        to: "/features",
        icon: <i className="fa-solid fa-bag-shopping"></i>,
        title: "Возможности",
        subBtn: ["Стиль", "Элементы", "Портфолио"]
    },
    {
        to: "/analytics",
        icon: <i className="fa-solid fa-chart-pie"></i>,
        title: "Аналитика"
    },
    {
        to: "/calendar",
        icon: <i className="fa-solid fa-calendar-days"></i>,
        title: "Календарь"
    },
    {
        to: "/users",
        icon: <i class="fa-solid fa-users"></i>,
        title: "Пользователи"
    },
    {
        to: "/products",
        icon: <i class="fa-solid fa-computer"></i>,
        title: "Инвентарь",
        span: "New"
    },
    {
        to: "/settings",
        icon: <i className="fa-solid fa-gear"></i>,
        title: "Настройки"
    },
    {
        to: "/login",
        icon: <i className="fa-solid fa-sign-out"></i>,
        title: "Выйти",
        onClickS: "logout"
    }
];

const TheComponent = ({ open, setOpen, handleClick }) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 775) {
                if (open) {
                    setOpen(false);
                }
            }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, [open, setOpen]);
    return (
        isAuth ? <div className='darkNavbar'>
                    <NegativeSidebar open={open} onClick={handleClick} />
                    <SideBarWrapper open={open}>
                        <div className='sideBarBody'>
                            <Logo />
                            <Scrollbar style={{ width: 250, height: '82.55vh' }}>
                            <UnorderList>
                                {makeButtons.map((btn, i) => (
                                    <SideBarButton
                                        key={i}
                                        to={btn.to}
                                        icon={btn.icon}
                                        title={btn.title}
                                        span={btn.span}
                                        subBtn={btn.subBtn}
                                        onClicks={btn.onClickS}
                                        handleClick={handleClick}
                                    />
                                ))}
                            </UnorderList>
                            </Scrollbar>
                            <Footer />
                        </div>
                    </SideBarWrapper>
                </div>
        : <div>
            
        </div>
    );
};

export default TheComponent;