import React from 'react'
import college_logo from '../../images/college_logo.png'
import logout from '../../images/logout.svg'
import '../css/dashboard.css'

const Sidebar = () => {
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
            <div className="recent-complaints-scrollbar">
              {/* TODO: Add a scrollbar */}
            </div>
          </div>
          <div className="logout">
            <span className='logout-title'>LOG OUT</span>
            <img src={logout} alt="logout" className='logout-img'/>
          </div>
      </div>
  )
}

export default Sidebar
