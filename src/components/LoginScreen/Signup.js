import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './Signup.css'
function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            console.log(error);
        });
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message);
        });
    }
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input type="email" ref={emailRef} placeholder="Email address" />
                <input type="password" ref={passwordRef} placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span style={{color: 'gray'}}>
                        New to Netflix? 
                    </span>
                    {" "}
                    <span className="signup-link" onClick={register}>
                    Sign Up Now
                    </span>
                    </h4>
            </form>
        </div>
    )
}

export default Signup
