import React from "react"
import "./Scoreboard.css"
import Board from "./Board"
import ashwa from "../../assets/color-ashwa.png"
import scoreboard_data from "../../constants"
import bg from "../../assets/bg.png"
const Scoreboard = () => {
  // Calculate the sum of sub_points for each team
  const teamsWithTotalSubPoints = scoreboard_data.map(team => {
    const totalSubPoints = team.list.reduce(
      (sum, list) => sum + list.sub_points,
      0
    )
    return { ...team, totalSubPoints }
  })

  // Sort the teams based on totalSubPoints
  const sortedTeams = teamsWithTotalSubPoints.sort(
    (a, b) => b.totalSubPoints - a.totalSubPoints
  )

  return (
    <div id="scoreboard">
      <img height={150} width={150} src={ashwa} alt="Ashwa" />
      <div className="container">
        {sortedTeams.map((data, index) => (
          <Board
            key={index}
            rank={index + 1}
            team={data.team}
            title_color={data.title_color}
            points_color={data.points_color}
            lists={data.list}
            totalSubPoints={data.totalSubPoints}
          />
        ))}
      </div>
    </div>
  )
}

export default Scoreboard
