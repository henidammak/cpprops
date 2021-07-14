import React from "react";
import { Button } from "react-bootstrap";
const Cole = (props) => {
  const suggestcole = [
    {
      src: "https://www.youtube.com/embed/s1rpLCn2IV8",
      title: "YouTube video player",
    },
    {
      src: "https://www.youtube.com/embed/scwiCJ2Lvdc",
      title: "YouTube video player",
    },
  ];
  return (
    <div className="Cole">
      <div className="row">
        <div className="col-md-2">
          <Button
            variant="danger"
            onClick={() => props.alertMyInput(`My name is Chris Cole `)}
          >
            Skater 2
          </Button>
        </div>
        <div className="col-md-2">
          <img height="200px" src="cole1.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/Rk0_dhvSGJU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <div className="col-md-4">
            {suggestcole.map((el) => (
              <iframe
                src={el.src}
                title={el.title}
                height="97px"
                width="190px"
                text-align="center"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cole;
