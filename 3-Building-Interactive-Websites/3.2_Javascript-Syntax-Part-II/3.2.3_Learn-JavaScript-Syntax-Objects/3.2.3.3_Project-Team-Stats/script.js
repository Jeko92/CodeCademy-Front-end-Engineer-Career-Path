const team = {
  _players: [
    {
      firstName: "Lionel",
      lastName: "Messi",
      age: 36,
    },
    {
      firstName: "Kilian",
      lastName: "Mbappe",
      age: 24,
    },
    {
      firstName: "Sergio",
      lastName: "Ramos",
      age: 37,
    },
  ],
  _games: [
    {
      oponent: "Lens",
      teamPoints: 85,
      opponentPoints: 84,
    },
    {
      oponent: "Monaco",
      teamPoints: 85,
      opponentPoints: 65,
    },
    {
      oponent: "Reims",
      teamPoints: 85,
      opponentPoints: 51,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };

    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.players);
console.log(team.games);
