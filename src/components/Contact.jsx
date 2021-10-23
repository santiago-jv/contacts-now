import React from 'react'
import {
    ContactCard,
    CardTitle,
    CardSubtitle,
    CardActions,
    Text,
    IconButton,
    CardImage,} from "../styles/Contacts.styles"
const Contact = ({contact,goToEditContact,call,removeContact}) => {
    return (
        <ContactCard key={contact.id}>
            <CardImage src={contact.profile_image} alt="Contact" />
            <CardTitle>
                <Text>{contact.first_name}</Text>
                <Text>{contact.last_name}</Text>
                </CardTitle>
            <CardSubtitle>{contact.phone_number}</CardSubtitle>
            <CardActions>
                <IconButton onClick={()=>goToEditContact(contact.id)} className="fas fa-user-edit">

                </IconButton>
                <IconButton onClick={()=>call(contact.phone_number)} className="fas fa-phone">
                    
                </IconButton>
                <IconButton onClick={()=>removeContact(contact.id)} className="fas fa-user-minus">
                    
                </IconButton>
            </CardActions>
        </ContactCard>
    )
}

export default Contact
