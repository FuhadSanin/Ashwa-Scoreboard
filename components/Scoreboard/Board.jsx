import React from "react"

const Board = ({ rank, team, title, points }) => {
  return (
    <div className="board">
      <div className="col-1" style={{ backgroundColor: "#343a40" }}>
        <h1>{rank}</h1>
      </div>
      <div className="col-2">
        <div className="title" style={{ backgroundColor: `${title}` }}>
          <h2>{team}</h2>
          <h1>40</h1>
        </div>
        <div
          className="points"
          style={{
            backgroundColor: `${points}`,
            boxShadow:
              "rgba(50, 50, 93, 0.2) 0px 20px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 15px 30px -18px inset",
          }}
        >
          <div className="first">
            <p>Basket Ball</p>
            <p>+40</p>
          </div>
          <div className="second">
            <p>Foot Ball</p>
            <p>+90</p>
          </div>{" "}
          <div className="third">
            <p>Cricket</p>
            <p>+20</p>
          </div>{" "}
          <div className="fourth">
            <p>Shot put</p>
            <p>+40</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
