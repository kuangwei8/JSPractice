const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11
    }
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27
    }
  ],
  // get players() {
  //   return this._players;
  // },
  // get games() {
  //   return this._games;
  // },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    return this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    return this._games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("A", 40, 46);
team.addGame("B", 50, 60);
team.addGame("C", 50, 50);
console.log(team._games);
