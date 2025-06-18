import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(

<section>
  <div className="Header headerbox text-white" style={{ color: "white" }}>
    <nav className="navbar navbar-expand-lg text-white" style={{ color: "white" }}>
      <div className="container-fluid d-flex justify-content-between align-items-right" style={{ color: "white" }}>
        {/* Logo fully left and top with 20px bottom margin */}
        <div style={{ marginRight: "24px", alignSelf: "flex-start", color: "white" }}>
        </div>
        {/* Navbar items aligned right */}
        <ul className="navbar-nav ms-auto" style={{ color: "white" }}>
          <li className="nav-item">
            <a className="nav-link active" href="/" style={{ color: "white" }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/mysourcecode" style={{ color: "white" }}>My Source Code</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="/policyblog" style={{ color: "white" }}>Policy Dispatch</a>
          </li>
          
         
          <li className="nav-item">
            <a className="nav-link" href="/services" style={{ color: "white" }}>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects" style={{ color: "white" }}>My Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contactme" style={{ color: "white" }}>Establish Connection</a>
          </li>
        </ul>
      </div>
    </nav>
    <div />
  </div>
</section>

 


    )
}
export default Header













