import * as actionTypes from './types'

const INITIAL_STATE = {
    content: ''
}

const messageReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action

    switch(type){
        case actionTypes.SET_MESSAGE:
            return {content: payload}
        case actionTypes.CLEAR_MESSAGE:
            return {content: ""}
        default:
            return state
    }
}

export default messageReducer