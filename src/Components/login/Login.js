import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import '../../firebaseconfig'
import Admin from '../admin/Admin';
import './css/login.css'
import logo from '../images/college_logo.png'

const Login = () => {
    return (
        <div className="main  d-flex bg-primary vh-100  flex-column justify-content-center align-content-center">
            <div className="maincontainer container shadow bg-light h-50 ">
                <div className="logo container p-5 d-flex justify-content-center align-content-center">
                    <img src={logo} className='logo' alt="college_logo" />
                </div>
                <div className="label ">
                    <label>Complain Managment Portal</label>
                </div>
                <div className="access-mode d-flex justify-content-between ">
                    <div className="user">
                        <button className="btn btn-dark">User Login</button>
                    </div>
                    <div className="admin">
                        <button className="btn btn-dark">Admin Login</button>
                    </div>
                    <div className="worker">
                        <button className="btn btn-dark">Worker Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
