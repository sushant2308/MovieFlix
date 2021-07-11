import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span style={{color: 'gray'}}>
                        New to Netflix? 
                    </span>
                    {" "}
                    <span className="signup-link">
                    Sign Up Now
                    </span>
                    </h4>
            </form>
        </div>
    )
}

export default Signup
