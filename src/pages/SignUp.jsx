import axios from "axios";
import React, {useState} from "react";
import { API_BASE_URL } from "../api_config";
import Button from '../components/Button'
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import Alert from "../components/Alert";
import errorHandler from "../request/errorHandler";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import messageAction from '../store/message/actions'

const emailRegEx = /^\S+@\S+\.\S+$/
const passRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const SignUp = () => {
    const navigate = useNavigate()
    const emailValidator = useInput( inputVal => emailRegEx.test(inputVal))
    const passValidator = useInput( inputVal => passRegEx.test(inputVal))
    const firstnameValidator = useInput( inputVal => inputVal.trim() !== '')
    const lastnameValidator = useInput( inputVal => inputVal.trim() !== '')
    const confirmPassValidator = useInput(inputVal => inputVal === passValidator.inputValue && inputVal.trim() != '')
    const formIsValid = emailValidator.isInputValid && passValidator.isInputValid && firstnameValidator.isInputValid && lastnameValidator.isInputValid && confirmPassValidator.isInputValid
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!formIsValid){
            if(!emailValidator.isInputValid) {emailValidator.inputBlurHandler()}
            if(!passValidator.isInputValid) { passValidator.inputBlurHandler()}
            if(!firstnameValidator.isInputValid) { firstnameValidator.inputBlurHandler()}
            if(!lastnameValidator.isInputValid) { lastnameValidator.inputBlurHandler()}
            if(!confirmPassValidator.isInputValid) { confirmPassValidator.inputBlurHandler()}
            
            return
        }
        
        setIsLoading(true)
        try {
            const response = await axios.post(`${API_BASE_URL}users`,{
                firstname: firstnameValidator.inputValue,
                lastname: lastnameValidator.inputValue,
                email: emailValidator.inputValue,
                password: passValidator.inputValue
            })
            setIsLoading(false)
            dispatch(messageAction.setMessage({
                content:'Successfully register, you need to connect to access services',
                messageType: 'success'
            }))
            navigate("/signin")
            
        } catch(error){
            const errorMessage = errorHandler(error)
            setIsLoading(false)
            setErrorMessage(errorMessage)
        }

    }
    return (
        <div className="items-center">
            <div className="w-11/12 md:w-2/3 lg:w-1/4 mx-auto p-5 bg-white rounded-md shadow">
                <h1 className="text-3xl uppercase font-extrabold mb-6 text-blue-900">Login page</h1>
                { errorMessage ? <Alert type="danger">{errorMessage}</Alert> : ''}
                <form action="" onSubmit={onSubmit}>
                    <Input 
                        type="text"
                        label="Firstname"
                        placeholder="Enter your firstname"
                        id="firstname"
                        onChange={firstnameValidator.valueChangedHandler}
                        value={firstnameValidator.inputValue}
                        onBlur={firstnameValidator.inputBlurHandler}
                        error={firstnameValidator.hasError}
                        errorMessage="Please provide your firstname"
                    />
                    <Input 
                        type="text"
                        label="Lastname"
                        placeholder="Enter your Lastname"
                        id="lastname"
                        onChange={lastnameValidator.valueChangedHandler}
                        value={lastnameValidator.inputValue}
                        onBlur={lastnameValidator.inputBlurHandler}
                        error={lastnameValidator.hasError}
                        errorMessage="Please provide your lastname"
                    />
                    <Input 
                        type="email"
                        label="E-mail"
                        placeholder="Enter your e-mail"
                        id="email"
                        onChange={emailValidator.valueChangedHandler}
                        value={emailValidator.inputValue}
                        onBlur={emailValidator.inputBlurHandler}
                        error={emailValidator.hasError}
                        errorMessage="Your address e-mail is invalid"
                    />
                    <Input 
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        onChange={passValidator.valueChangedHandler}
                        value={passValidator.inputValue}
                        onBlur={passValidator.inputBlurHandler}
                        error={passValidator.hasError}
                        errorMessage="Password must contains 8 caracters, 1 uppercase, 1 special caracter and 1 digit"
                    />
                   <Input 
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm your password"
                        id="password"
                        onChange={confirmPassValidator.valueChangedHandler}
                        value={confirmPassValidator.inputValue}
                        onBlur={confirmPassValidator.inputBlurHandler}
                        error={confirmPassValidator.hasError}
                        errorMessage="Passwords doesn't match"
                    />
                    <Button loading={isLoading} size="full">Register</Button>
                </form>
                <hr className=" my-5 w-9/12 h-0.5 bg-slate-200 mx-auto"/>
                <div className="text-center text-blue-900"><a href="/signin" className="font-semibold">Sign in</a></div>
            </div>
        </div>
    )
}

export default SignUp