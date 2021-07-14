import React from "react";
import { Button } from "react-bootstrap";
const Malto = (props) => {
  const suggestmalto = [
    {
      src: "https://www.youtube.com/embed/0Z9UbwKnoss",
      title: "YouTube video player",
    },
    {
      src: "https://www.youtube.com/embed/G3ee60P1zIk",
      title: "YouTube video player",
    },
  ];
  return (
    <div className="Malto">
      <div className="row">
        <div className="col-md-2">
          <Button
            variant="danger"
            onClick={() => props.alertMyInput(`My name is Sean Malto `)}
          >
            Skater 1
          </Button>
        </div>
        <div className="col-md-2">
            <img height="200" src="malto1.jpg" alt="" />
          </div>
         <div className="col-md-4">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/O_yw-Vo2fUo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <div className="col-md-4">
            {suggestmalto.map((el) => (
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

export default Malto;
