import styled from "styled-components";

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100vh;
`
const ImageContainer = styled.section`
    width:80%;
    max-width:400px;
    
    
`
const Image = styled.img`
    width:100%;
    user-select: none;
    -webkit-user-drag:none;
    `
const Content = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:90%;
    max-width:500px;

`
const Title = styled.h1`
    color:${props => props.theme.textPrimaryColor };
    transition:color 0.5s ease;
    margin:.5rem 0 1rem 0;
    font-size:2rem;

`
const Description = styled.h2`
    color:${props => props.theme.textPrimaryColor };
    transition:color 0.5s ease;
    text-align:center;
    margin:0;
    font-size:1.3rem;

`
const ButtonContainer = styled.div`
    margin-top:2rem;

`

export {
    MainContent,
    ImageContainer,
    Image,
    Content,
    Title,
    Description,
    ButtonContainer
}