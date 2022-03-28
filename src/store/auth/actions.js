import * as actionTypes from './types'
import * as actionTypesMessage from '../message/types'
import * as authServices from '../../auth/AuthService'
import { useNavigate } from 'react-router-dom'

export const signin = (loginData) => async (dispatch) => {
    dispatch({
        type: actionTypes.LOADING_REQUEST,
        payload: {loading: true}
    })

    const result = await authServices.login(loginData)
    
    if(result.success){
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: result.data
        })
    } else {
        dispatch({
            type: actionTypes.FAILED_REQUEST
        })
        dispatch({
            type: actionTypesMessage.SET_MESSAGE,
            payload: {content: result, messageType: 'danger'}
        })
    }
}