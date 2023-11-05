import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import './css/Login.css';
import '../../firebaseconfig'
import Admin from '../admin/Admin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            // Handle the case where the user is not authenticated
        }
    });

    const handleLogin = () => {
        if (!isValidEmail(email)) {
            setError('Invalid email format.');
        } else if (email.trim() === '' || password.trim() === '') {
            setError('Email and password are required.');
        } else {
            setError(null);
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    console.log("you logged");
                   
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    return (
        <div className="containerStyle">
            <form className="formStyle">
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
