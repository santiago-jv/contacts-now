import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
    
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

`

const LoaderContainer = styled.div`
    margin:1rem auto;
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-left-color: ${props=>props.theme.mainColor};
    animation: ${spinAnimation} 1s ease infinite;
`
export {
    LoaderContainer
}