import React from "react";
import "./Fixture.css";

const Row = ({
  title,
  time,
  roundno,
  venue,
  left_team,
  left_color,
  right_team,
  right_color,
}) => {
  return (
    <div className="team">
      <div className="inr">
        <div className="item">{title}</div>
      </div> 
      <div className="left">
        <div className="ta" style={{ backgroundColor: `${left_color}` }}>
          <h1>{left_team}</h1>
        </div>
        <div className="time">
        <div className="round"><h1>{roundno}</h1></div>
          <h1>{time}</h1>
          <h1 className="ven">{venue}</h1>
        </div>
        <div className="tb" style={{ backgroundColor: `${right_color}` }}>
          <h1>{right_team}</h1>
        </div>
      </div>
    </div>
  );
};

export default Row;
