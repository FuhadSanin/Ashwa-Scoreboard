import React from "react";
import "./Fixture.css";
import ashwa from "../../assets/color-ashwa.png";
import illus from "../../assets/Football Player.gif";

const Fixture = () => {
  return (
    <d id="fixture">
      <div className="container">
        <div className="logo">
          <img src={ashwa} alt="" />
        </div>
        <div className="head">FIXTURES</div>
        <div className="all">
          <div className="date">
            <h1>23rd WEDNESDAY</h1>
          </div>
        </div>
        <div className="team">
          <div className="item">FOOTBALL</div>
          <div className="left">
            {/* <div className="circle-container">
      <img src={illus} alt="Your GIF" />
    </div> */}
            <div className="ta" style={{ backgroundColor: "#4DB657" }}>
              GREEN
            </div>
            <div className="time">10:30 AM</div>
            <div className="tb" style={{ backgroundColor: "#3A71C4" }}>
              BLUE
            </div>
            {/* <div className="circle-container">
      <img src={illus} alt="Your GIF" />
    </div> */}
          </div>
        </div>
        <div className="team">
          <div className="item">FOOTBALL</div>
          <div className="left">
            <div className="ta" style={{ backgroundColor: "#F3594D" }}>
              <h1>RED</h1>
            </div>
            <div className="time">
              <h1>10:30 AM</h1>
            </div>
            <div className="tb" style={{ backgroundColor: "#4DB657" }}>
              <h1> GREEN </h1>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="item">FOOTBALL</div>
          <div className="left">
            <div className="ta" style={{ backgroundColor: "#DBD355" }}>
              YELLOW
            </div>
            <div className="time">10:30 AM</div>
            <div className="tb" style={{ backgroundColor: "#3A71C4" }}>
              BLUE
            </div>
          </div>
        </div>
        <div className="team">
          <div className="item">FOOTBALL</div>
          <div className="left">
            <div className="ta" style={{ backgroundColor: "#F3594D" }}>
              RED
            </div>
            <div className="time">10:30 AM</div>
            <div className="tb" style={{ backgroundColor: "#DBD355" }}>
              YELLOW
            </div>
          </div>
        </div>
      </div>
    </d>
  );
};

export default Fixture;
