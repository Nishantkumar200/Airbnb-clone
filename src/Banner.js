import { MDBBtn } from "mdbreact";
import React from "react";
import './banner.css';

function Banner() {
  return (
    <React.Fragment>
      <div className="bannerImage">
        <h1>Go <br/>Near</h1>
        <button>Explore nearby stays</button>
      </div>
    </React.Fragment>
  );
}

export default Banner;
