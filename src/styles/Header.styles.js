import styled from "styled-components";
import {Link as LINK} from "react-router-dom"
const HeaderElement = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:4rem;
    background:${props=>props.theme.headerColor};
    transition:background .5s ease;
`
const HeaderContainer = styled.section`
    width:95%;
    max-width:1000px;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin:auto;
`
const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`
const Icon = styled.i`
    color:#fff;
    font-size:1.6rem;
    margin-right:1rem;
`
const Title = styled.h1`
    color:#fff;
    font-size:1.8rem;
    cursor:${props => props.cursor};

`
const IconButtonContainer = styled.div`
    
`
const IconButton = styled.i`
    color:#fff;
    font-size:1.6rem;
    cursor:pointer;
`
const BackgroundContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.4);
    width:100%;
    height:100vh;
    opacity:0;
    transition:opacity .4s ease;
    visibility:hidden;
`
const MenuContainer = styled.div`
    position:fixed;
    right:-100%;
    top:0;
    width:80%;
    max-width:500px;
    height:100vh;
    background:${props=>props.theme.headerColor};
    transition:all .5s ease;
    

`
const MenuHeader = styled.div`  
    width:95%;
    margin:auto;
    padding:1rem 2rem;
    align-items:center;
    justify-content:space-between;
    display:flex;
    border-bottom:2px solid #fff;
`
const Nav = styled.nav` 
    margin-top:1rem;
    
`
const Link = styled(LINK)` 
    font-size:1.6rem;
    text-decoration:none;
    color:#fff;
    transition:all .5s ease;
    border-bottom:2px solid transparent;
    font-weight:bold;

    &:hover{
        border-bottom:2px solid #fff;
    }
`

const UserContent = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:2rem;
`
const User = styled.div` 
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const Profile = styled.div` 
    margin-right:2rem;
`
const Image = styled.img` 
  width:120px;
  height:120px;
  object-fit:cover;
  border-radius:50%;
  border:2px solid #fff;    
`
const UserInfo = styled.div` 
    
`
const Text = styled.p` 
    font-size:1.5rem;
    text-align:center;
    font-weight:bold;
    color:#fff;
`
const IconContainer = styled.div`
    display: flex;
    justify-content:center;
`
const IconChangeTheme = styled.i` 
    font-size:2.5rem;
    margin-top:3rem;
    
    color:#fff;
    cursor:pointer;

`
export {
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
    Nav,
    Link,
    UserContent,
    User,
    Profile,
    Image,
    UserInfo,
    IconContainer,
    IconChangeTheme,
    Text
}