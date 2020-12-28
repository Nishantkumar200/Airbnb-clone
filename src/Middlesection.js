import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./middlesection.css";

const Middlesection = () => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/modern-metropolis-night-cityscape-cartoon-vector_1441-2959.jpg?size=626&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Gangtok</h3>
                <h6>7-hour drive</h6>
              </div>
            </div>
          </MDBCol>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-78.jpg?size=626&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Ranchi</h3>
                <h6>2.5-hour drive</h6>
              </div>
            </div>
          </MDBCol>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/medieval-town-street-with-old-european-buildings_107791-2703.jpg?size=626&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Patna</h3>
                <h6>1.5-hour drive</h6>
              </div>
            </div>
          </MDBCol>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?size=338&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Haridwar</h3>
                <h6>8-hour drive</h6>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/mountain-landscape-with-tourist-foreground_1441-60.jpg?size=338&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Kolkata</h3>
                <h6>7-hour drive</h6>
              </div>
            </div>
          </MDBCol>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/wooden-pier-boat-river-natural-landscape_33099-1868.jpg?size=626&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Mansuri</h3>
                <h6>6-hour drive</h6>
              </div>
            </div>
          </MDBCol>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/tropical-seascape-blue-ocean-palm-tree-island_39190-188.jpg?size=626&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Bodh Gaya</h3>
                <h6>2-hour drive</h6>
              </div>
            </div>
          </MDBCol>
          <MDBCol  size="3" sm="6" md="3" lg="3">
            <div className="contents">
              <img
                src="https://img.freepik.com/free-vector/cartoon-landscape-with-travel-car-rides-road-handwritten-lettering-summer_296045-2.jpg?size=626&ext=jpg&ga=GA1.2.1256548588.1606898486"
                className="photo"
                alt="trip Photo"
              />
              <div className="text">
                <h3>Sasaram</h3>
                <h6>2.5-hour drive</h6>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
};

export default Middlesection;
