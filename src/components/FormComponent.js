import './FormComponent.css'
import { useState } from 'react'

const FormComponent = () => {

    // Value state

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //Error state

    const [errorUsername,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorConfirmPassword,setErrorConfirmPassword] = useState('')

    //color state
    // * you can modify code is 1 const for use all error validate

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [confirmPasswordColor,setConfirmPasswordColor] = useState('')

    // Check value

    const validateForm = (e) => {
        e.preventDefault()

        if(userName.length>=8){
            setErrorUserName('')
            setUserNameColor('green')
        }else {
            setErrorUserName('Username must be of length more 8 characters')
            setUserNameColor('red')
        }
        if(email.includes("@")) {
            setErrorEmail('')
            setEmailColor('green')
        }else {
            setErrorEmail("Doesn't look like a valid email")
            setEmailColor('red')
        }
        if(password.length>=8){
            setErrorPassword('')
            setPasswordColor('green')
        }else {
            setErrorPassword('Password must be of length more 8 characters')
            setPasswordColor('red')
        }
        if(confirmPassword !== "" && confirmPassword === password){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        }else {
            setErrorConfirmPassword('This field does not match password')
            setConfirmPasswordColor('red')
        }

    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Form Register</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}}/>
                    <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default FormComponent