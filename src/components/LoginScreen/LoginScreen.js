import React,{ useState} from 'react'
import Logo from './68F8EE.png'
import './LoginScreen.css'
import Signup from './Signup'
function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginscreen">
            <div className="loginscreen-bg">
            <img className="loginscreen-logo" src={Logo} alt=""/>
            <button className="loginscreen-button" onClick={(e) => {
                    e.preventDefault()
                    setSignIn(true)
                }}>
                    Sign In
            </button>
                <div className="loginscreen-gradient"></div>
                <div className="loginscreen-body">
                {signIn ? (
                    <Signup/>
                ) : (
                        
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginscreen-input">
                        <form >
                            <input type="email" placeholder="Email address" />
                            <button className="loginscreen-input-button" onClick={(e) => {
                    e.preventDefault()
                    setSignIn(true)
                }}>GET STARTED</button>
                    </form>
                </div>    
                </>
                )}
                </div>
            </div>
            
        </div>
    )
}

export default LoginScreen
