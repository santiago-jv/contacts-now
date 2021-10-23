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
    LinkTo
} from "../common/styles"

import { AppContext } from '../context/ContextProvider'
import { useHistory } from 'react-router'
import { login } from '../services/http-auth'

const initialState = {email:"",password:"", message:""}

const Login = () => {
    const {dispatch} = useContext(AppContext)
    const history = useHistory()
    const [credentials, setCredentials] = useState({})
    const [errors, setErrors] = useState(initialState)

    const handleInputs = (event)=>{
        setErrors({...errors, [event.target.name]:"", message: ""})
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
    const sendCredentials = async (event) => {
        event.preventDefault();
        try {
            const response = await login(credentials);
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
    return (
        <Container>
            <Title>Log in</Title>
            <Form onSubmit={sendCredentials}>
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
                 <ErrorMessage>{errors.message}</ErrorMessage>
               <Button icon="fas fa-sign-in-alt" isSubmitBtn={true} text="Log in"/>
               <LinkTo to="/register">You do not have an account?</LinkTo> 
            </Form> 
        </Container>
    )
}

export default Login
