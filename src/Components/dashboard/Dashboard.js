import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebaseconfig'
import Sidebar from './components/Sidebar';
import Options from './components/Options'

import './css/dashboard.css'
import Content from './components/Content';

const Dashboard = () => {

  const navigate = useNavigate();

   useEffect(()=>{
    const islogged = onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log("logged in")
        }
        else{
            console.log("not logged in")
            navigate('/login')
        }
    });
    return () => {
        islogged();
    };
   },[navigate])

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <div className="right-section">
        <div className="horizontal-navbar">
          Dashboard
        </div>
        <Content/>
      </div>
    </div>
  )
}

export default Dashboard
