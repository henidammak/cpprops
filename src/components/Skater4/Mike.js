import React from "react";
import myimg from "../../Mike.jpg";
import { Button } from "react-bootstrap";
const Mike = ({ props, suggestmike }) => {
  return (
    <div className="Mike">
      
      <div className="row">
        <div className="col-md-2">
          <Button
            variant="danger"
            onClick={() => props.alertMyInput(`My name is Mike Vallely `)}
          >
            Skater 4
          </Button>
        </div>
        <div className="col-md-2">
          <img height="200px" src={myimg} alt="" />
        </div>
        <div className="col-md-4">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/L0UE3pdCvXw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div className="col-md-4">
            {suggestmike.map((el) => (
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

export default Mike;
