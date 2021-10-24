import React from 'react'
import {
    ContactCard,
    CardTitle,
    CardSubtitle,
    CardActions,
    Text,
    IconButton,
    CardImage,} from "../styles/Contacts.styles"
import { PhoneNumberFormat,PhoneNumberUtil } from 'google-libphonenumber';

const Contact = ({contact,goToEditContact,call,removeContact}) => {
    const phoneUtil = new PhoneNumberUtil.getInstance();
    const sendMessage = () => {
        const WINDOW = window.open(`https://wa.me/${contact.phone_number}?`)
        WINDOW.focus()
    }
    return (
        <ContactCard key={contact.id}>
            <CardImage src={contact.profile_image} alt="Contact" />
            <CardTitle>
                <Text>{contact.first_name}</Text>
                <Text>{contact.last_name}</Text>
                </CardTitle>
            <CardSubtitle>{phoneUtil.format(phoneUtil.parse(contact.phone_number), PhoneNumberFormat.INTERNATIONAL)} </CardSubtitle>
            <CardActions>
                <IconButton onClick={()=>goToEditContact(contact.id)} className="fas fa-user-edit">

                </IconButton>
                <IconButton onClick={()=>call(contact.phone_number)} className="fas fa-phone">
                    
                </IconButton>
                <IconButton onClick={sendMessage} size="1.6rem" className="fab fa-whatsapp">
                    
                    </IconButton>
                <IconButton onClick={()=>removeContact(contact.id)} className="fas fa-user-minus">
                    
                </IconButton>
            </CardActions>
        </ContactCard>
    )
}

export default Contact
