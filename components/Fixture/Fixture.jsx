import React from 'react';
import './Fixture.css';
import ashwa from '../../assets/ashwa.png';

const Fixture = () => {
  return (
    <div id='fixture'>
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
          <div className="ta" style={{ backgroundColor: '#4DB657' }}>GREEN</div>
          <div className="time">10:30 AM</div>
          <div className="tb" style={{ backgroundColor: '#3A71C4' }}>BLUE</div>
        </div>
      </div>
      <div className="team">
        <div className="item">FOOTBALL</div>
        <div className="left">
          <div className="ta" style={{ backgroundColor: '#F3594D' }}>RED</div>
          <div className="time">10:30 AM</div>
          <div className="tb" style={{ backgroundColor: '#4DB657' }}>GREEN</div>
        </div>
      </div>
      <div className="team">
        <div className="item">FOOTBALL</div>
        <div className="left">
          <div className="ta" style={{ backgroundColor: '#DBD355' }}>YELLOW</div>
          <div className="time">10:30 AM</div>
          <div className="tb" style={{ backgroundColor: '#3A71C4' }}>BLUE</div>
        </div>
      </div>
      <div className="team">
        <div className="item">FOOTBALL</div>
        <div className="left">
          <div className="ta" style={{ backgroundColor: '#F3594D' }}>RED</div>
          <div className="time">10:30 AM</div>
          <div className="tb" style={{ backgroundColor: '#DBD355' }}>YELLOW</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Fixture;
