import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Contact from '../components/Contact';
import Loader from '../components/Loader';
import { getContacts,deleteContact } from '../services/http-contacts';
import {
    Container,
    ContactsContainer,
    ButtonContainer
} from "../styles/Contacts.styles"

const Contacts = () => {
    const isSucribed = useRef(false)
    const [contacts, setContacts] = useState([])
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const retrieveContacts = useCallback(async () => {
       if(!isSucribed.current){
            setLoading(true)
            try {
                const response = await getContacts();
                setContacts(response.data);

            } catch (error) {
                console.log(error);
                toast.error("Failed to connect to server")
            }
            setLoading(false)
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
            setContacts(
                contacts.filter(contact => contact.id !== id)
            )
            toast.success('Contact deleted successfully.')
            await deleteContact(id)
        } catch (error) {
            console.log(error);
            toast.error('Failed to connect to server')
        }
    }
    const call = (phone_number) => {
        window.location.href = `tel:${phone_number}`
    }
    useEffect(() => {
        retrieveContacts();
        return ()=>{
            isSucribed.current= true
        }
    }, [retrieveContacts])
    return (
        
        <Container>
            {loading ? <Loader/> :
            <>
            <ButtonContainer>
                <Button action={goToCreateContact} icon="fas fa-plus-circle" text="Add a new contact"/>
            </ButtonContainer>
            <ContactsContainer>
                {contacts.map(contact=>(
                    <Contact key={contact.id} contact={contact} goToEditContact ={goToEditContact} removeContact={removeContact} call={call}/>
                ))}
            </ContactsContainer>
            </>
            }
        </Container>
         
    )
}

export default Contacts
