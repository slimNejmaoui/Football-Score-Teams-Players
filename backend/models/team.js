
const mongoose = require("mongoose");
// create un shema

const teamShema = mongoose.Schema({

    Name: String,
    Stadium: String,
    Country: String,
    Owner: String,


});

const team = mongoose.model("Team", teamShema);
module.exports = team;