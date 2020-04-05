import React from "react";

function Storie(props) {
  const storie = props.storie
  return (
    <div key={storie.id} className="storie">
      <div className="storie-image">
        <img src={storie.userPicture} alt="user" />
      </div>
      <div className="storie-user">
        <strong>{storie.user}</strong>
        <span>{storie.time}</span>
      </div>
    </div>
  );
}
export default Storie
