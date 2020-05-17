import React from "react";
import "./buttons.scss";

const Buttons = () => (
  <div className="buttons">
    <div className="buttons-links">
      <div className="external-link">
        <a 
          href="https://github.com/cristinadobre92"
          target="blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <span className="extra">
          &nbsp;&nbsp;&nbsp; here are resting all the self-thought projects
        </span>
      </div>
      <div className="external-link">
        <a
          href="https://www.linkedin.com/in/cristina-dobre-29aa0877"
          target="blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a><span className="extra">
          &nbsp;&nbsp;&nbsp; what have i done untill now with my professional life 
        </span>
      </div>
      <div className="external-link">
        <a
          href="https://www.facebook.com/dobre.cristina"
          target="blank"
          rel="noopener noreferrer"
        >
          facebook
        </a><span className="extra">
          &nbsp;&nbsp;&nbsp; not posting much, but following everyone's moves
        </span>
      </div>
      <div className="external-link">
        <a
          href="https://www.instagram.com/cristina.dobre92"
          target="blank"
          rel="noopener noreferrer"
        >
          instagram
        </a><span className="extra">
          &nbsp;&nbsp;&nbsp; mainly cats and travels 
        </span>
      </div><div className="external-link">
        <a
          href="https://twitter.com/CristinaDobre9"
          target="blank"
          rel="noopener noreferrer"
        >
          twitter
        </a><span className="extra">
          &nbsp;&nbsp;&nbsp; not very active, but i can be found on this link too
        </span>
      </div>
    </div>
  </div>
);

export default Buttons;
