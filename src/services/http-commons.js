import axios from "axios";
let http;

http = axios.create ({
    baseURL:'https://contacts-api-node.herokuapp.com/api/',
    headers : {
         'Content-type': 'application/json'
    }
})

export default http
