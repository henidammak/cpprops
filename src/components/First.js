import React from "react";
import { Carousel } from "react-bootstrap";
const First = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/5524159.jpg"
            alt="First slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>PLAYERS</h3>
            <p>Sean Malto , Chris Cole , Nyjah Huston , ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/1668047.jpg"
            alt="Second slide"
            height="400px"
          />

          <Carousel.Caption>
            <h3>SKATEBOARD</h3>
            <p>Khboro , Oxello , Girl , ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/e0/8e/85/e08e85316f01ea6abd7b03af148f12af.jpg"
            alt="Third slide"
            height="400px"
          />

          <Carousel.Caption>
            <h3>MARK</h3>
            <p>
              Trusher , Nike SB , Vans , ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default First;
