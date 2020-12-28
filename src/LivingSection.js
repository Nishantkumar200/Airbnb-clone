import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypo,
  MDBTypography,
} from "mdbreact";
import React from "react";
import "./living.css";

const LivingSection = () => {
  return (
    <React.Fragment>
      <MDBContainer className="mainContainer">
        <MDBTypography variant="h3" className="mainheading">
          Live Anywhere
        </MDBTypography>
        <MDBRow>
          <MDBCol size="3">
            <img
              src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
              className="image"
            />
            <MDBTypography className="title">Entire Room</MDBTypography>
          </MDBCol>
          <MDBCol size="3">
            <img
              src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
              className="image"
            />
            <MDBTypography className="title">Cabins and cottage</MDBTypography>
          </MDBCol>
          <MDBCol size="3">
            <img
              src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
              className="image"
            />
            <MDBTypography className="title">Unique stays</MDBTypography>
          </MDBCol>
          <MDBCol size="3">
            <img
              src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
              className="image"
            />
            <MDBTypography className="title">Pets welcome</MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className="container1">
        <MDBTypography variant="h3" className="mainheadings">
          Experience the world
        </MDBTypography>
        <MDBTypography variant="h3" className="subheadings">
          Unique activities with local experts-in person or online
        </MDBTypography>
        <MDBRow>
          <MDBCol size="4">
            <img
              src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=320"
              className="images"
            />
           <h3 className="title1">Online Experience</h3>
            <h4 className="title2">
              Travel the world without leaving home.
            </h4>
          </MDBCol>
          <MDBCol size="4">
            <img
              src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=320"
              className="images"
            />
           <h3 className="title1">Experience</h3>
            <h4 className="title2">
              Things to do wherever you are.
            </h4>
          </MDBCol>
          <MDBCol size="4">
            <img
              src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320"
              className="images"
            />
            <h3 className="title1">Adventures</h3>
            <h4 className="title2">
             Multi-day trips with meals and stays.
            </h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="mainContainer">
        <MDBTypography variant="h3" className="mainheading">
         Joins millions of hosts on Airbnb
        </MDBTypography>
        <MDBRow>
          <MDBCol size="4">
            <img
              src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=320"
              className="image1"
            />
            <MDBTypography className="title">Host your home</MDBTypography>
          </MDBCol>
          <MDBCol size="4">
            <img
              src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=320"
              className="image1"
            />
            <MDBTypography className="title">Host an Online Experience</MDBTypography>
          </MDBCol>
          <MDBCol size="4">
            <img
              src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=320"
              className="image1"
            />
            <MDBTypography className="title">Host an Experience</MDBTypography>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>

    </React.Fragment>
  );
};

export default LivingSection;
