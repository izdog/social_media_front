import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../store/auth/actions";
import Button from '../components/Button'
import Alert from '../components/Alert'
import useInput from "../hooks/useInput";
import Input from "../components/Input";


const LoginPage = () => {
    const emailValidator = useInput(inputVal => inputVal.trim() !== '')
    const passValidator = useInput(inputVal => inputVal.trim() !== '')
    const isValidForm = emailValidator.isInputValid && passValidator.isInputValid 
    const {content, messageType} = useSelector(state => state.message)
    
    
    const loading = useSelector(state => state.auth.loading)

    const dispatch = useDispatch()


    const onSubmit = e => {
        e.preventDefault()
        if(!isValidForm){
            if(!emailValidator.isInputValid) { emailValidator.inputBlurHandler()}
            if(!passValidator.isInputValid) { passValidator.inputBlurHandler()}

            return
        }

        dispatch(signin({
            email: emailValidator.inputValue,
            password: passValidator.inputValue
        }))
    }  

    return (
        <div className="items-center">
            <div className="w-11/12 md:w-2/3 lg:w-1/4 mx-auto p-5 bg-white rounded-md shadow">
                <h1 className="text-3xl uppercase font-extrabold mb-6 text-blue-900">Login page</h1>
                { content ? <Alert type={messageType}>{content}</Alert> : ''}
                <form action="" onSubmit={onSubmit}>
                    <Input 
                        label="E-mail" 
                        id="email" 
                        placeholder="Enter your e-mail"
                        onChange={emailValidator.valueChangedHandler}
                        value={emailValidator.inputValue}
                        onBlur={emailValidator.inputBlurHandler}
                        error={emailValidator.hasError}
                        errorMessage="Please enter your e-mail"
                    />
                    
                    <Input 
                        label="Password" 
                        id="password" 
                        placeholder="Enter your password"
                        onChange={passValidator.valueChangedHandler}
                        value={passValidator.inputValue}
                        onBlur={passValidator.inputBlurHandler}
                        error={passValidator.hasError}
                        errorMessage="Please enter your password"
                    />
                    <Button loading={loading} size="full">Sign in</Button>
                </form>
                <hr className=" my-5 w-9/12 h-0.5 bg-slate-200 mx-auto"/>
                <div className="text-center text-blue-900"><a href="/signup" className="font-semibold">Sign up</a></div>
            </div>
        </div>
    )
}

export default LoginPage