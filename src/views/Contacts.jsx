import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Contact from '../components/Contact';
import { getContacts,deleteContact } from '../services/http-contacts';
import {
    Container,
    ContactsContainer,
    ButtonContainer
} from "../styles/Contacts.styles"

const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const history = useHistory()

    const retrieveContacts = useCallback(async () => {
       
        try {
            const response = await getContacts();
            setContacts(response.data);

        } catch (error) {
            console.log(error);
            toast.error("Failed to connect to server")
        }
       
    },[])
    const goToCreateContact =  () => {
        history.push('/contacts/create')
    }
    const goToEditContact = (id) => {
        history.push(`/contacts/edit/${id}`)
    }
    const removeContact = async (id) => {
        try {
            await deleteContact(id)
        } catch (error) {
            console.log(error);
            toast.error('Failed to connect to server')
        }
        setContacts(
            contacts.filter(contact => contact.id !== id)
        )
        toast.success('Contact deleted successfully.')
    }
    const call = (phone_number) => {
        window.location.href = `tel:${phone_number}`
    }
    useEffect(() => {
        retrieveContacts();
        
    }, [retrieveContacts])
    return (
        
        <Container>
            <ButtonContainer>
                <Button action={goToCreateContact} icon="fas fa-plus-circle" text="Add a new contact"/>
            </ButtonContainer>
            <ContactsContainer>
                {contacts.map(contact=>(
                    <Contact contact={contact} goToEditContact ={goToEditContact} removeContact={removeContact} call={call}/>
                ))}
            </ContactsContainer>
        </Container>
         
    )
}

export default Contacts
