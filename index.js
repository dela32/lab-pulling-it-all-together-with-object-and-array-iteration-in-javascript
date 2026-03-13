 function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

const game = gameObject();

// takes a players name and returns the number of points scored by that player
function numPointsScored(playerName){
    if (game.home.players[playerName]){
         return game.home.players[playerName].points;
    }else if (game.away.players[playerName]){
        return game.away.players[playerName].points;
    }else{
        return "Player not found";
    }

};
// take a player's name and returns the shoe size of that player
function shoeSize(playerName){
    if (game.home.players[playerName]){
        return game.home.players[playerName].shoe;
    }else if (game.away.players[playerName]){
        return game.away.players[playerName].shoe;
    }else{
        return "Player not found";
    }
    };

// take a team name and returns an array of that teams colors
function teamColors(teamName){
    if (game.home.teamName === teamName){
        return game.home.colors;
    }else if (game.away.teamName === teamName){
        return game.away.colors;
    }else{
        return "Team not found";
    }
};

function teamNames(){
    const teamNames = [];
    teamNames.push(game.home.teamName);
    teamNames.push(game.away.teamName);
    return teamNames;
}
//  takes a team name as input and return an array of all players jersey numbers on that team.
function playerNumbers(teamName){
    const playersNumbers = [];
    if (game.home.teamName === teamName){
        for (const player in game.home.players){
            playersNumbers.push(game.home.players[player].number);
    }}else if (game.away.teamName === teamName){
        for (const player in game.away.players){
            playersNumbers.push(game.away.players[player].number);
            }
        }
    return playersNumbers;
    }

// Takes a players name as input and returns object with all stats for that player.
function playerStats(playerName){
    return game.home.players[playerName] || game.away.players[playerName] || "Player not found";
};

// Advanced//Challenge
// Returns the number of rebounds for the player with the largest shoe size.
function bigShoeRebounds(){
    let biggestShoeSize = 0;
    let rebounds = 0;
    for (const team in game){
        for (const player in game[team].players){
            if (game[team].players[player].shoe > biggestShoeSize){
                biggestShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
};








// // Tesing my functions


// numPointsScored("Jeff Adrien");
// shoeSize("Jeff Adrien");
// teamColors("Charlotte Hornets");
// teamNames();
// playerNumbers("Brooklyn Nets");
// playerStats("Jeff Adrien");
// bigShoeRebounds();