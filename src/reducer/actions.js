
const saveSession = (state, user) => {
    return  {
        ...state,
        user
    }
}

const closeSession = (state) => {
    sessionStorage.removeItem('session')
    return  {
        ...state,
        user: null
        
    }
}
export {
    saveSession,
    closeSession
}