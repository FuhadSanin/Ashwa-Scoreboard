import React from "react"
import "./Winners.css"
import Card from "./Card"

const Winners = () => {
  return (
    <div id="Winner">
      <div className="container">
        <div className="title">Title</div>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Winners
