import React from "react"
import "./Scoreboard.css"
import Board from "./Board"
import ashwa from "../../assets/ashwa.png"
const Scoreboard = () => {
  return (
    <div id="scoreboard">
      <img height={150} width={150} src={ashwa} alt="Ashwa" />
      <div className="container">
        <Board rank="1" team="Red" title="#F3594D" points="#FF756B" />
        <Board rank="2" team="Green" title="#4DB657" points="#64C66D" />
        <Board rank="3" team="Blue" title="#3A71C4" points="#4B80CF" />
        <Board rank="4" team="Yellow" title="#E2DA54" points="#E4DA3C" />
      </div>
    </div>
  )
}

export default Scoreboard
