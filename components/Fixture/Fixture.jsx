import React from "react";
import "./Fixture.css";
import ashwa from "../../assets/color-ashwa.png";
import Row from "./Row";
import proddec from "../../assets/proddec.png";

const Fixture = () => {
  return (
    <d id="fixture">
      <img className="proddec" width={150} height={150} src={proddec} alt="" />
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
            roundno="Round 1"
            time="11:30"
            venue="open court"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />
          <Row
            title="Cricket"
            roundno="Round 1"
            time="12:30"
            venue="open court"
            left_team="BLUE"
            left_color="#3A71C4"
            right_team="RED"
            right_color="#F3594D"
          />
          <Row
            title="Football"
            roundno="Round 1"
            time="10:30"
            venue="open court"
            left_team="RED"
            left_color="#F3594D"
            right_team="GREEN"
            right_color="#4DB657"
          />
          <Row
            title="Basketball-"
            roundno="Round 1"
            time="11:30"
            venue="open court"
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
