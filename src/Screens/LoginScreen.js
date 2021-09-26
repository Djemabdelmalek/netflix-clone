import {React,useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';
function LoginScreen() {

    const [signIn,setsignIn] = useState(false);

    return (
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" className="LoginScreen_logo" />
                <button className="LoginScreen_btn" onClick={() => setsignIn(true)}> Sign in</button>
                <div className="LoginScreen_gradient" ></div>
                <div className="LoginsScreen_body">
                    { signIn ? (
                        <SignUpScreen />
                    ) : (
                    <>
                    <h1>Unlimited Films, TV programmes and more.</h1>
                    <h2>Watch anywhere, Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="LoginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button className="loginScreen_getStarted" onClick={() => setsignIn(true)}>GET STARTED</button>
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
