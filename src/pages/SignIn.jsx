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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const message = useSelector(state => state.message.content)
    const loading = useSelector(state => state.auth.loading)

    const dispatch = useDispatch()

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        if(!isValidForm){
            if(!emailValidator.isInputValid) { emailValidator.inputBlurHandler()}
            if(!passValidator.isInputValid){ passValidator.inputBlurHandler()}
            return
        }
        dispatch(signin({
            email: email,
            password: password
        }))
    }  

    return (
        <div className="items-center">
            <div className="w-11/12 md:w-2/3 lg:w-1/4 mx-auto p-5 bg-white rounded-md shadow">
                <h1 className="text-3xl uppercase font-extrabold mb-6 text-blue-900">Login page</h1>
                { message ? <Alert type="danger">{message}</Alert> : ''}
                <form action="" onSubmit={onSubmit}>
                    <div className="my-6">
                        <Input 
                            label='E-mail'
                            id='email'
                            type='email'
                            placeHolder='Enter your e-mail'
                            onChange={emailValidator.valueChangeHandler}
                            value={emailValidator.inputValue}
                            onBlur={emailValidator.inputBlurHandler}
                            error={emailValidator.hasError}
                            errorMessage='Your e-mail is missing'
                        />
                    </div>
                    <div className="my-6">
                    <Input 
                            label='Password'
                            id='password'
                            type='password'
                            placeHolder='Enter your password'
                            onChange={passValidator.valueChangeHandler}
                            value={passValidator.inputValue}
                            onBlur={passValidator.inputBlurHandler}
                            error={passValidator.hasError}
                            errorMessage='Your password is missing'
                        />
                    </div>
                    <Button loading={loading} size="full">Sign in</Button>
                </form>
                <hr className=" my-5 w-9/12 h-0.5 bg-slate-200 mx-auto"/>
                <div className="text-center text-blue-900"><a href="/signup" className="font-semibold">Sign up</a></div>
            </div>
        </div>
    )
}

export default LoginPage