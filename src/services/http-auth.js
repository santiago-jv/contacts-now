import http from "./http-commons";
import authHeader from "./http-header";

const register = (credentials) => http.post('/auth/register',credentials)

const login = (credentials) => http.post('/auth/login', credentials)

const getUser = () => http.get('/auth/user',{headers: authHeader()})
export  {
    register,
    login,
    getUser
}