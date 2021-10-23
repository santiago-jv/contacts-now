import React, { useCallback, useEffect, useState } from 'react'
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

const initialState = {email:"",password:"", message:""}

const FormContact = (props) => {
    const {id} = props.match.params
    const [profileImage, setProfileImage] = useState([defaultProfile])
    const history = useHistory()
    const [contact, setContact] = useState({first_name:"",last_name:"",phone_number:"",})
    const [errors, setErrors] = useState(initialState)

    const retrieveContact = useCallback(async()=> {
        try {
            const response = await getContact(id);
            setProfileImage([{data_url:response.data.profile_image}])
            setContact(response.data)
        } catch (error) {
            console.log(error);
            toast.error("There was an error retrieving the contact. ")
            history.push('/contacts')
        }
    },[history,id])
    useEffect(() => {
        if(id){
            retrieveContact()
        }
    
    }, [id,retrieveContact])
    const handleInputs = (event)=>{
        setErrors({...errors, [event.target.name]:"", message: ""})
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    } 
    const sendContact = async (event) => {
        event.preventDefault();
        try {
            if(!id){
                const response = await createContact({ ...contact,profile_image:profileImage[0].data_url})
                toast.success(`Contact ${response.data.contact.first_name} ${response.data.contact.last_name} created successfully.`)
            }
            else{
                const response = await updateContact(id,{ ...contact,profile_image:profileImage[0].data_url})
                toast.success(`Contact ${response.data.contact.first_name} ${response.data.contact.last_name} updated successfully.`)
            }
            history.push('/contacts')

        } catch (error) {
            console.log(error);

          
        }
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
                    <ErrorMessage>{}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="last_name">Last Name</Label>
                    <FieldContainer>
                        <IconField className="fas fa-user-tag"></IconField>
                        <Field value={contact.last_name} onChange={handleInputs} id="last_name" name="last_name" type="text"/>
                    </FieldContainer>
                    <ErrorMessage>{}</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phone_number">Phone Number</Label>
                    <FieldContainer>
                        <IconField className="fas fa-phone-alt"></IconField>
                        <Field value={contact.phone_number} onChange={handleInputs} id="phone_number" name="phone_number" type="text"/>
                    </FieldContainer>
                    <ErrorMessage>{}</ErrorMessage>
                </FormGroup>
                 <ErrorMessage>{errors.message}</ErrorMessage>
               <Button icon="fas fa-sign-in-alt" isSubmitBtn={true} text={id?"Update contact":"Create contact"}/>
            </Form> 
        </Container>
        </>
    )
}

export default withRouter(FormContact) 
