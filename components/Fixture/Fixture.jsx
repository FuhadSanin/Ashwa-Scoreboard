import React from "react";
import "./Fixture.css";
import ashwa from "../../assets/color-ashwa.png";
import illus from "../../assets/Football Player.gif";
import Row from "./Row";

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
        <div className="fixture-list">
          <Row
            title="Volleyball"
            time="11:30"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />
          <Row
            title="Cricket"
            time="12:30"
            left_team="BLUE"
            left_color="#3A71C4"
            right_team="RED"
            right_color="#F3594D"
          />
          <Row
            title="Football"
            time="10:30"
            left_team="RED"
            left_color="#F3594D"
            right_team="GREEN"
            right_color="#4DB657"
          />
          <Row
            title="Basketball"
            time="11:30"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />
        </div>
      </div>
    </d>
  );
};

export default Fixture;
