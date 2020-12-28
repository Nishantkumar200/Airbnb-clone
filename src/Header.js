import React, { Component,useEffect,useState } from "react";
import Airbnblogo from "./images/logo.png";
import "./header.css";
import { MDBIcon } from "mdbreact";

 const Header =()=> {

  const [header,setHeader] = useState(false);


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset>0){
        setHeader(true);
      }else{
        setHeader(false);
      }
    })
  })
  
    return (
      <React.Fragment>
        <div  className={header ? 'fixed' :'headerSection'}>
          <div className="left__section">
            <img src={Airbnblogo} className="logo" alt="logo" />
          </div>
          <div className="middle__section">
            <input
              type="text"
              placeholder="Start Your Search"
              className="inputfield"
            />
            <MDBIcon icon="fab fa-search" className="search" />
          </div>
          <div className="right__section">
           <h5>Become a host </h5>
            <MDBIcon icon="fas fa-globe" className="language" />
             <div className="iconset">
              <MDBIcon icon="fas fa-bars" className="bars" />
              <MDBIcon icon="fas fa-user-circle" className="profile" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  
}

export default Header;