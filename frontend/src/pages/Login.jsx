import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add actual authentication logic here
        console.log("Logging in with", username);
        navigate('/');
    };

    return (
        <div className="login-body">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="imgcontainer">
                    <img src="/Logo.jpeg" alt="Avatar" className="avatar" />
                </div>
                <h2>"NRGK Fashions: Elevate Your Wardrobe"</h2>
                <div className="login-container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="uname"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                    <br /><br />
                    <label>
                        <input type="checkbox" defaultChecked name="remember" /> Remember me
                    </label>
                    <span className="psw"><a href="#">Forgot password?</a></span>
                </div>
            </form>
        </div>
    );
};

export default Login;
