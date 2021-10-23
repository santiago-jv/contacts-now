import React, { useRef } from 'react'
import { useHistory } from 'react-router';
import {
    HeaderElement,
    HeaderContainer,
    TitleContainer,
    Icon,
    Title,
    IconButtonContainer,
    IconButton,
    BackgroundContainer,
    MenuContainer,
    MenuHeader,
    IconChangeTheme,
    IconContainer
} from "../styles/Header.styles"
import UserInformation from './UserInformation';

const Header = ({theme,setTheme}) => {
    const bgRef = useRef();
    const menuRef = useRef();
    const history = useHistory();

    const handleTheme = () => {
        const newTheme = theme==="light" ? "dark" : "light"
        localStorage.setItem("theme",newTheme);
        setTheme(newTheme)
    }
    const openMenu = () => {
        bgRef.current.style.visibility = "visible"
        bgRef.current.style.opacity = 1;
        menuRef.current.style.right = "0"
    }
    function  closeMenu () {
        bgRef.current.style.visibility = "hidden"
        bgRef.current.style.opacity = 0;
        menuRef.current.style.right = "-100%"
    
    }

    const goToHome = () => {
        history.push('/')
    }
    return (
        <HeaderElement>
            <HeaderContainer>
                <TitleContainer>
                    <Icon className="fas fa-address-book">
                    </Icon>
                    <Title cursor="pointer" onClick={goToHome}>
                        ContactsNow
                    </Title>
                    
                </TitleContainer>
                <IconButtonContainer>
                    <IconButton onClick={openMenu} className="fas fa-bars">

                    </IconButton>
                </IconButtonContainer>


                <BackgroundContainer onClick={closeMenu} ref={bgRef}>
                </BackgroundContainer>
                    <MenuContainer ref={menuRef}>
                        <MenuHeader>
                        <Title cursor="default">Menu</Title>
                            <IconButton onClick={closeMenu} className="fas fa-times">

                            </IconButton>
                        </MenuHeader>
                        <UserInformation closeMenu={closeMenu}/>
                       <IconContainer>
                            <IconChangeTheme className={theme==="dark" ? "fas fa-sun" : "fas fa-moon"} onClick={handleTheme}></IconChangeTheme>
                        </IconContainer>
                    </MenuContainer>
            </HeaderContainer>
            
        </HeaderElement>
    )
}

export default Header
