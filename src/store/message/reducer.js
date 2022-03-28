import * as actionTypes from './types'

const INITIAL_STATE = {
    content: '',
    messageType: ''
}

const messageReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action

    switch(type){
        case actionTypes.SET_MESSAGE:
            return payload
        case actionTypes.CLEAR_MESSAGE:
            return state
        default:
            return state
    }
}

export default messageReducer