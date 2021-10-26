import styled from "styled-components"
import {Link as LINK} from "react-router-dom"
const ButtonElement = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    background:${props=>props.alternative?props.theme.alternativeButton: props.theme.mainColor };
    transition:background 0.5s ease; 
    outline:none;
    border:none;
    padding:.4rem 2rem;
    border-radius:.3rem;
    cursor:pointer;
    margin:${props=>props.margin?props.margin:""};
`
const Icon = styled.i`
    font-size:1.05rem;
    margin:0;
    margin-right:1rem;
    color:${props=>props.alternative?props.theme.alternativeText:"#fff"};
    transition:color .5s ease;
`
const Text = styled.p`
    font-size:1.05rem;
    font-weight:bold;
    margin:0;
    color:${props=>props.alternative?props.theme.alternativeText:"#fff"};
    transition:color .5s ease;
`

const Title = styled.h1`
    font-size:1.7rem;
    font-weight:bold;
    margin:0;
    color:${props=>props.theme.textPrimaryColor};
    transition:color .5s ease;
`
const Container = styled.div`
   margin:auto;
   margin:${props => props.margin? props.margin :"6rem auto 2rem auto"};
   width:90%;
   max-width:500px;
   background:${props=>props.theme.bgSecondaryColor};
   padding:2rem;
   box-shadow:${props=>props.theme.shadow};
   border-radius:.7rem;
   transition:background .5s ease;
   
`
const Form = styled.form``

const FormGroup = styled.div`
    margin:1rem auto;
`
const Label = styled.label`
   color:${props => props.theme.textPrimaryColor};
   display:block;
   transition:color .5s ease;
   margin-bottom:.3rem;
   font-size:1.2rem;
`
const FieldContainer = styled.div`
   display: flex;
   align-items: center;
   border-radius:.5rem;
   background:${props => props.theme.bgSecondaryColor};
   height:40px;
   padding-left:.5rem;
   border:2px solid ${props=>props.theme.mainColor};
   transition:all  .5s ease;
`
const Field = styled.input`
   border:none;
   outline:none;
   width:100%;
   border-radius:.5rem;
   height:100%;
   font-size:1.1rem;
   color:${props => props.theme.textPrimaryColor};
   background:transparent;
   transition:color .5s ease;

`

const IconField = styled.i`
    font-size:1.05rem;
    margin:0;
    margin-right:1rem;
    color:${props => props.theme.mainColor};
    transition:color .5s ease;
`
const ErrorMessage = styled.p`
    color:#e03636;
    margin-bottom:1rem;
    margin-top:.5rem;
    font-size:1.1rem;
`
const LinkTo = styled(LINK)`
    display:block;
    color:${props => props.theme.mainColor};
    transition:color .5s ease;
    margin-top:1rem;
    font-size:1.1rem;
    width:fit-content;
`

export {
    ButtonElement, 
    Icon, 
    Text,
    Container,
    Form,
    FormGroup,
    Label,
    FieldContainer,
    IconField,
    Title,
    Field,
    ErrorMessage,
    LinkTo
}