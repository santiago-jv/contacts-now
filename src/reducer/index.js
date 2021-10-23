import { closeSession, saveSession } from "./actions"

const reducer = (state,action)=>{
    switch (action.type){   
        case 'SAVE_SESSION':
            return saveSession(state, action.user)
        case 'CLOSE_SESSION':
            return closeSession(state)
        default:
            return state
    }
}

export {
    reducer
}