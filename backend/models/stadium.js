
const mongoose = require("mongoose")

const stadiumShema = mongoose.Schema({

    name: String,
    capacite: String,
    country: String,

})

const player = mongoose.model("Stadium", stadiumShema);
module.exports = player;