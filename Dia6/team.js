const team = {
    name: "Rayados", 
    city: "Monterrey",
    number: 11,
    players: ["Mochis", "Chavez","Guzman","Salcedo", "Arteaga", "Rodriguez", "Torres","Fimbrez","Corona","Canales","Juca"],
    position: 8,
    getPlayer: function() {
        return this.players[this.position + 2];   

    }

    };


console.log(team.getPlayer());
console.log(team.name);
console.log(team.city);
console.log(team.number);
console.log(team.players);
console.log(team.position);