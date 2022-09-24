import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function StartGame() {
    const navigate=useNavigate()
    
  const Play = () => {
    navigate("./level")
  };
  return (
    <>
      <div id="play-box-main">
        <div className="play-box">
          <input
            className="showPlay"
            type="button"
            onClick={() => Play()}
            value="Play"
          ></input>
        </div>
      </div>
    </>
  );
}

export default StartGame;
