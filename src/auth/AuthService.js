import { API_BASE_URL } from "../api_config";
import axios from "axios";
import errorHandler from "../request/errorHandler";

export const login = async (loginData) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}auth/login`,
            loginData
        )
        
        localStorage.setItem('user', JSON.stringify(response.data.data))
        return response.data
    } catch(error) {
        return errorHandler(error)
    }
}

export const isAuth = () => {
    const user = localStorage.getItem('user')
    if(!user) return false

    return true
}


