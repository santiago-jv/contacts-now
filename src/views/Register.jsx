import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { toast } from 'react-toastify';

import { 
    Container,
    Form,
    FormGroup,
    Label,
    FieldContainer,
    IconField,
    Title,
    Field,
    ErrorMessage,
    LinkTo} from "../common/styles"

import { AppContext } from '../context/ContextProvider'
import { useHistory } from 'react-router'
import {  register } from '../services/http-auth'
import InputUserImage from '../components/InputUserImage'
import { defaultProfile } from '../constants'

const initialState = {first_name:"",last_name:"",email:"",password:"",repeated_password:"", message:""}

const Register = () => {
    const {dispatch} = useContext(AppContext)
    const history = useHistory()
    const [profileImage, setProfileImage] = useState([defaultProfile])
    const [credentials, setCredentials] = useState({first_name:"",last_name:"",email:"",password:"",repeated_password:""})
    const [errors, setErrors] = useState(initialState)

    const handleInputs = (event)=>{
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
    const validatePasswords = ()=>{
        return (credentials.password === credentials.repeated_password) && credentials.password !== "";
    }
    const registerCredentials = async (event) => {
        event.preventDefault();
        console.log(validatePasswords());
        console.log(profileImage[0].data_url);
        if(validatePasswords()){
            try {
                const {first_name,last_name,email,password} = credentials
                const response = await register({profile_image:profileImage[0].data_url,first_name,last_name,email,password});
                console.log(response.data);
                dispatch({type: 'SAVE_SESSION', user: response.data.user})
                sessionStorage.setItem('session', response.data.access_token);
                toast.success(`Welcome ${response.data.user.first_name} ${response.data.user.last_name}`)
                history.push('/contacts')
    
            } catch (error) {
                if(error.response.status === 401){
                    console.log(error.response.data.message);
                    setErrors({...errors,message:error.response.data.message})
                }
                else if (error.response.status === 400){
                    setErrors({...errors,...error.response.data.errors})
                }
              
            }
        }
        else{
            setErrors({...errors,repeated_password:'The passwords must be equals' })
        }
    }
    return (
        <Container>
            <Title>Register</Title>
            <Form onSubmit={registerCredentials}>
                <FormGroup>
                      
                        <InputUserImage profileImage={profileImage} setProfileImage={setProfileImage}   />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="first_name">First Name</Label>
                    <FieldContainer>
                        <IconField className="fas fa-user-tag"></IconField>
                        <Field onChange={handleInputs} id="first_name" name="first_name" type="text"/>
                    </FieldContainer>
                    <ErrorMessage>{errors.first_name.msg}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="last_name">Last Name</Label>
                    <FieldContainer>
                        <IconField className="fas fa-user-tag"></IconField>
                        <Field onChange={handleInputs} id="last_name" name="last_name" type="text"/>
                    </FieldContainer>
                    <ErrorMessage>{errors.last_name.msg}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <FieldContainer>
                        <IconField className="fas fa-envelope"></IconField>
                        <Field onChange={handleInputs} id="email" name="email" type="email"/>
                    </FieldContainer>
                    <ErrorMessage>{errors.email.msg}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <FieldContainer>
                        <IconField className="fas fa-key"></IconField>
                        <Field onChange={handleInputs} id="password" name="password" type="password"/>
                    </FieldContainer>
                    <ErrorMessage>{errors.password.msg}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="repeated_password">Repeat the password</Label>
                    <FieldContainer>
                        <IconField className="fas fa-key"></IconField>
                        <Field onChange={handleInputs} id="repeated_password" name="repeated_password" type="password"/>
                    </FieldContainer>
                    <ErrorMessage>{errors.repeated_password}</ErrorMessage>
                </FormGroup>
                 <ErrorMessage>{errors.message}</ErrorMessage>
               <Button icon="fas fa-cloud" isSubmitBtn={true} text="Sign up"/> 
               <LinkTo to="/login">Do you already have an account?</LinkTo>
            </Form> 
        </Container>
    )
}

export default Register
