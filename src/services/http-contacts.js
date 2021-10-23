import authHeader from "./http-header";
import http from "./http-commons";

const getContacts =  () => http.get('contacts/', {headers: authHeader()} )

const getContact =  (id) =>  http.get(`contacts/${id}`,{headers: authHeader()});

const createContact =  (contact) =>  http.post(`contacts/`, contact,{headers: authHeader()});

const updateContact = (id,contact) => http.put(`contacts/${id}`,contact,{headers: authHeader()})

const deleteContact = (id) => http.delete(`contacts/${id}`,{headers: authHeader()})
export  {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact 
}