const scoreboard_data = [
  {
    rank: "1",
    team: "Green",
    title_color: "#4DB657",
    points_color: "#64C66D",
    list: [
      {
        game: "Football",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Basketball",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Soccer",
        sub_points: 45,
      },
      {
        game: "Baseball",
        sub_points: 70,
      },
    ],
  },
  {
    rank: "2",
    team: "Red",
    title_color: "#F3594D",
    points_color: "#FF756B",
    list: [
      {
        game: "Hockey",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Volleyball",
        sub_points: 75,
      },
      {
        game: "Table Tennis",
        sub_points: 55,
      },
      {
        game: "Badminton",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
    ],
  },
  {
    rank: "3",
    team: "Yellow",
    title_color: "#E2DA54",
    points_color: "#E4DA3C",
    list: [
      {
        game: "Tennis",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Golf",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Swimming",
        sub_points: 80,
      },
      {
        game: "Cycling",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
    ],
  },
  {
    rank: "4",
    team: "Blue",
    title_color: "#3A71C4",
    points_color: "#4B80CF",
    list: [
      {
        game: "Cricket",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Rugby",

        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Athletics",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
      {
        game: "Boxing",
        sub_points: Math.floor(Math.random() * 100) + 1,
      },
    ],
  },
]

export default scoreboard_data
