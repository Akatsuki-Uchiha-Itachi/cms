import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebaseconfig'

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse flex-column" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Dashboard
