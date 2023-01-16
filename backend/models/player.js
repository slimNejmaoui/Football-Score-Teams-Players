
const mongoose = require("mongoose");

const playerShema = mongoose.Schema({
    name: String,
    numero: Number,
    position: String,
    team: String,
    age: Number,
    avatar: String,


});

const player = mongoose.model("Player", playerShema);

module.exports = player; 