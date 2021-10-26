import styled from "styled-components";

const UserProfile = styled.div`    
    width:fit-content;
    margin:auto;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
   
    
    `
const UploadContainer = styled.div`
  
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    margin-top:1rem;

`


const ProfileImage = styled.img`
    width:150px;
    height:150px;
    cursor:pointer;
    border-radius:50%;
    object-fit:cover;
    border:3px solid ${props => props.theme.borderColor};
    transition:border .5s ease;
    
`
export {
    UserProfile,
    ProfileImage,
    UploadContainer,
    
}