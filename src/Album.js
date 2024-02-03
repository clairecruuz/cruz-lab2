import React from "react";

function Album(props) {
  return (
    <div className="album">
      <div className="image-container">
        <img src={props.albumObj.image} alt={props.albumObj.title} />
      </div>
      <div>
        <h3>{props.albumObj.title}</h3>
        <p>{props.albumObj.description}</p>
      </div>
    </div>
  );
}

export default Album;
