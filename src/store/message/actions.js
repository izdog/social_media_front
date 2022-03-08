import * as actionTypes from './types'

export const messageActions = {
    setMessage: (message) => ({
        type: actionTypes.SET_MESSAGE,
        payload: message
    }),
    clearMessage: () => ({
        type: actionTypes.CLEAR_MESSAGE
    })
}