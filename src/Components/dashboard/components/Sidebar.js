import React from 'react'
import college_logo from '../../images/college_logo.png'
import logoutimg from '../../images/logout.svg'
import {useNavigate} from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import {getDoc} from 'firebase/firestore'

const Sidebar = () => {
  const navigator = useNavigate();
  const logout = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      navigator('/login');
    }).catch((error)=>{
      console.log("navigation error:" + error);
    });
    
  }
  return (
    <div className="left-section">
          <div className="logo-title">
          <img src={college_logo} alt="logo" className='college-logo'/>
          <span className='dashboard-title'>Complain Management System</span>
          </div>
          <div className="recent-complaints">
            <div className="recent-complaints-title">
              Recent Complaints
            </div>
            <div className="recent-complaints-scrollbar w-full">
              <ul>
                {/* {TODO: Make an array scrollbar} */}
              </ul>
            </div>
          </div>
          <div className="logout" onClick={logout}>
            <span className='logout-title'>LOG OUT</span>
            <img src={logoutimg} alt="logout" className='logout-img'/>
          </div>
      </div>
  )
}

export default Sidebar
