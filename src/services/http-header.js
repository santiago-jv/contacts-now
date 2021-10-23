
const authHeader = () => {
    const token =  sessionStorage.getItem('session')
    if(token) {
        return {
            Authorization: "Bearer " + token
        }
    }
    return {
        
    }
  }
  
  export default authHeader