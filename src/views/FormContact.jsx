import React, { useCallback, useEffect, useRef, useState } from 'react'
import { PhoneNumberUtil } from 'google-libphonenumber';
import { useHistory, withRouter } from 'react-router'
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
} from "../common/styles"
import { toast } from 'react-toastify';

import Button from '../components/Button'
import { createContact, getContact, updateContact } from '../services/http-contacts'
import { defaultProfile } from '../constants'
import InputUserImage from '../components/InputUserImage'
import { ButtonContainer } from '../styles/Contacts.styles';
import Loader from '../components/Loader';

const initialState = {first_name:"",last_name:"", phone_number:"", message:""}

const FormContact = (props) => {
    const isSucribed = useRef(false)
    const {id} = props.match.params
    const [profileImage, setProfileImage] = useState(defaultProfile)
    const [loadingContact, setLoadingContact] = useState(false)
    const phoneUtil = new PhoneNumberUtil.getInstance()
    const [loadingPost, setLoadingPost] = useState(false)
    const history = useHistory()
    const [contact, setContact] = useState({first_name:"",last_name:"",phone_number:"",})
    const [errors, setErrors] = useState(initialState)

    const retrieveContact = useCallback(async()=> {
        if(!isSucribed.current){
            setLoadingContact(true)
            try {
                const response = await getContact(id);
                setProfileImage(response.data.profile_image)
                setContact(response.data)
            } catch (error) {
                toast.error("There was an error retrieving the contact. ")
                history.push('/contacts')
            }
            setLoadingContact(false)
        }
    },[history,id])
    useEffect(() => {
        if(id){
            retrieveContact()
        }
        return ()=>{
            isSucribed.current = true
        }
    
    }, [id,retrieveContact])
    const handleInputs = (event)=>{
        setErrors({...errors, [event.target.name]:"", message: ""})
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    } 
    const verifyPhoneNumber =()=>{
        try {
            
           return phoneUtil.isValidNumber(phoneUtil.parse(contact.phone_number))
        } catch (error) {}
    }
    const sendContact = async (event) => {
        setLoadingPost(true)
        event.preventDefault();
        if(verifyPhoneNumber()){

            try {
                if(!id){
                    const response = await createContact({ ...contact, profile_image:profileImage})
                    toast.success(`Contact ${response.data.contact.first_name} ${response.data.contact.last_name} created successfully.`)
                }
                else{
                    const response = await updateContact(id,{ ...contact,profile_image:profileImage})
                    toast.success(`Contact ${response.data.contact.first_name} ${response.data.contact.last_name} updated successfully.`)
                }
                history.push('/contacts')

            } catch (error) {
                setErrors({...errors,...error.response.data.errors})
            
            }
        }
        else{
            setErrors({...errors, phone_number:"The text supplied should be a valid phone number."})
        }
        setLoadingPost(false)
       
    }
    const back = ()=>{
        history.push('/contacts')
    }
    return (
        <>
        <ButtonContainer maxWidth="500px" width="90%" margin={"6rem auto 0rem auto"} justifyContent="flex-start">
            <Button action={back} text="Back" icon="fas fa-arrow-left"/>
        </ButtonContainer>
        <Container margin={"1rem auto 0 auto"}>
           {!loadingContact ?  
           <>
                <Title>{id?"Update a contact":"Create a contact"}</Title>
                <Form onSubmit={sendContact}>
                    <FormGroup> 
                        <InputUserImage profileImage={profileImage} setProfileImage={setProfileImage}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="first_name">First Name</Label>
                        <FieldContainer>
                            <IconField className="fas fa-user-tag"></IconField>
                            <Field value={contact.first_name} onChange={handleInputs} id="first_name" name="first_name" type="text"/>
                        </FieldContainer>
                        <ErrorMessage>{errors.first_name.msg}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="last_name">Last Name</Label>
                        <FieldContainer>
                            <IconField className="fas fa-user-tag"></IconField>
                            <Field value={contact.last_name} onChange={handleInputs} id="last_name" name="last_name" type="text"/>
                        </FieldContainer>
                        <ErrorMessage>{errors.last_name.msg}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <FieldContainer>
                            <IconField className="fas fa-phone-alt"></IconField>
                            <Field placeholder="Ex: +573002001100"value={contact.phone_number} onChange={handleInputs} id="phone_number" name="phone_number" type="text"/>
                        </FieldContainer>
                        <ErrorMessage>{errors.phone_number}</ErrorMessage>
                    </FormGroup>
                    <ErrorMessage>{errors.message}</ErrorMessage>
                    {loadingPost && <Loader margin="1rem auto"/>}
                <Button disabled={loadingPost && true} icon="fas fa-sign-in-alt" isSubmitBtn={true} text={id?"Update contact":"Create contact"}/>
                </Form>
                </> 
                : 
                <Loader margin="2rem auto"/>}
            </Container>
        </>
    )
}

export default withRouter(FormContact) 
