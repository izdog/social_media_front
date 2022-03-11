import React, {useState} from "react";
import Button from '../components/Button'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const loading = ''
    const message = ''
    

    return (
        <div className="items-center">
            <div className="w-11/12 md:w-2/3 lg:w-1/4 mx-auto p-5 bg-white rounded-md shadow">
                <h1 className="text-3xl uppercase font-extrabold mb-6 text-blue-900">Login page</h1>
                { message ? <Alert>{message}</Alert> : ''}
                <form action="">
                    <div className="my-6">
                        <label htmlFor="firstname">Firstname :
                            <input className="form-input" type="text" id="firstname" value={firstname}/>
                        </label>
                    </div>
                    <div className="my-6">
                        <label htmlFor="firstname">Lastname :
                            <input className="form-input"  type="text" id="lastname" value={lastname}/>
                        </label>
                    </div>
                    <div className="my-6">
                        <label htmlFor="email">Email :
                            <input className="form-input"  type="email" id="email" name="email" value={email}/>
                        </label>
                    </div>
                    <div className="my-6">
                        <label htmlFor="email">Password :
                            <input className="form-input"  type="password" id="password" name="password" value={password}/>
                        </label>
                    </div>
                    <div className="my-6">
                        <label htmlFor="email">Confirm password :
                            <input className="form-input"  type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}/>
                        </label>
                    </div>
                    <Button loading={loading} size="full">Register</Button>
                </form>
                <hr className=" my-5 w-9/12 h-0.5 bg-slate-200 mx-auto"/>
                <div className="text-center text-blue-900"><a href="/signin" className="font-semibold">Sign in</a></div>
            </div>
        </div>
    )
}

export default SignUp