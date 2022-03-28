import * as actionTypes from './types'

const messageActions = {
    setMessage: (message) => ({
        type: actionTypes.SET_MESSAGE,
        payload: message
    }),
    clearMessage: () => ({
        type: actionTypes.CLEAR_MESSAGE
    })
}

export default messageActions