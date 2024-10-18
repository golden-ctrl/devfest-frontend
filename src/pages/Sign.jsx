import React, { useState } from 'react';
import './Sign.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-container">
                    <img src="https://img.icons8.com/ios-filled/50/4CAF50/n.png" alt="logo" />
                    <h2>NetWise</h2>
                </div>
                <h3>Sign in</h3>
                <p>Please login to continue to your account.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="etudiant@estin@dz"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                {showPassword ? '🙈' : '👁️'}
              </span>
                        </div>
                    </div>
                    <button type="submit" className="login-btn">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
