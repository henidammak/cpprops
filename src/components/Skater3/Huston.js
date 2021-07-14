import React from "react";
import Hustonimg from "../../Huston.jpg";
import { Button } from "react-bootstrap";
const Huston = (props) => {
  const suggesthuston = [
    {
      src: "https://www.youtube.com/embed/NcaZPwzhmO8",
      title: "YouTube video player",
    },

    {
      src: "https://www.youtube.com/embed/t39a_5efH8s",
      title: "YouTube video player",
    },
  ];

  return (
    <div className="Huston">
      
     <div className="row">
        <div className="col-md-2">
          <Button
            
            variant="danger"
            onClick={() => props.alertMyInput(`My name is Nyjah Huston `)}
          >
            Skater 3
          </Button>
        </div>

        <div className="col-md-2">
          <img height="200px" src={Hustonimg} alt="Huston.jpg" />
        </div>
        
        <div className="col-md-4">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/mH8bvYlFMTk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div className="col-md-4">
            {suggesthuston.map((el) => (
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

export default Huston;
