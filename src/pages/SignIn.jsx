import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../store/auth/actions";
import Button from '../components/Button'
import Alert from '../components/Alert'

const LoginPage = () => {
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
        dispatch(signin({
            email: email,
            password: password
        }))
    }  

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-11/12 md:w-2/3 lg:w-1/4 mx-auto p-5 bg-white rounded-md shadow">
                <h1 className="text-3xl uppercase font-extrabold mb-6 text-blue-900">Login page</h1>
                { message ? <Alert>{message}</Alert> : ''}
                <form action="" onSubmit={onSubmit}>
                    <div className="my-6">
                        <label htmlFor="email">Email :
                            <input className="form-input" onChange={handleEmailChange} type="email" id="email" name="email" value={email}/>
                        </label>
                    </div>
                    <div className="my-6">
                        <label htmlFor="email">Password :
                            <input className="form-input" onChange={handlePasswordChange} type="password" id="password" name="password" value={password}/>
                        </label>
                    </div>
                    <Button loading={loading}>Se connecter</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage