
const mongoose = require("mongoose");
// create un shema

const coacheShema = mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,

});

const coache = mongoose.model("Coache", coacheShema);
module.exports = coache;