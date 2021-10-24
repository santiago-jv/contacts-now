import styled from "styled-components";


const Container = styled.main`
    margin-top:5rem;
    width:100%;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent?props.justifyContent:"center"};
    margin:${props => props.margin?props.margin:"1rem auto"};
    width:${props => props.width?props.width:"100%"};
    max-width:${props => props.maxWidth?props.maxWidth : ""};

`
const ContactsContainer = styled.section`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;

`

const ContactCard = styled.article`
    background:${props=>props.theme.cardBackground};
    width:95%;
    max-width:350px;
    border-radius:.4rem;
    margin:2rem;
    padding-top:1rem;
    display:flex;
    flex-direction:column;
    transition:background .5s ease;
    align-items:center;
    box-shadow:${props=>props.theme.shadow};
`
const CardImage = styled.img`
    margin:1rem 0 .5rem 0;
    width:150px;
    height:150px;
    border-radius:50%;
    object-fit:cover;
    margin-bottom:1rem;
    border:2px solid #fff;
`

const CardTitle = styled.div`
    margin-bottom:.5rem;
    
`
const Text = styled.h1`
    font-size:1.4rem;
    text-align:center;
    color:${props=>props.theme.textPrimaryColor};
    transition:color .5s ease;
`
const CardSubtitle = styled.h2`
    font-size:1.3rem;
    color:${props=>props.theme.textPrimaryColor};
    transition:color .5s ease;
    margin-bottom:1rem;

`
const CardActions = styled.div`
    padding:1rem 0;
    border-top:2px solid ${props=>props.theme.textPrimaryColor};
    transition:border .5s ease;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
`
const IconButton = styled.i`
    cursor:pointer;
    font-size:${props=>props.size?props.size :"1.2rem"};
    width:50px;
    height:50px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    color:#fff;
    background:${props=>props.theme.mainColor};
  
`

export {
    Container,
    ButtonContainer,
    ContactsContainer,
    ContactCard,
    Text,
    CardTitle,
    CardSubtitle,
    CardActions,
    IconButton,
    CardImage
}