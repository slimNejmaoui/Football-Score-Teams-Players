
//***importation des modules **** */

// import express module
const express = require('express')

// import body-parser module


const bodyParser = require('body-parser')

// import monggoose module

const mongoose = require('mongoose');
// connect app to juilletDB
mongoose.connect('mongodb://localhost:27017/juilletDB');


const userRoute = require('./routes/userRoute')
const matcheRoute = require('./routes/matcheRoute')
const teamsRoute = require('./routes/teamsRoute')
const playerRoute = require('./routes/playerRoute')
const stadiumRoute = require('./routes/stadiumRoute')


// import Bcrypt module

const bcrypt = require('bcrypt')

// import multer module

const multer = require('multer')
// import path module

const path = require('path');



// import path axios

const axios = require('axios')

var request = require('request');

// *****





let matches = [
    {

        scoreone: 2,
        scoretwo: 2,
        teamone: "psg",
        teamtwo: "Man city"
    },
    {

        scoreone: 3,
        scoretwo: 2,
        teamone: "Manu",
        teamtwo: "barcelona"
    },
    {

        scoreone: 4,
        scoretwo: 2,
        teamone: "liverp",
        teamtwo: "arsenal"
    },
    {
        scoreone: 0,
        scoretwo: 3,
        teamone: "psg",
        teamtwo: "cite"
    },
    {
        scoreone: 3,
        scoretwo: 0,
        teamone: "est",
        teamtwo: "ca"
    },
    {
        scoreone: 3,
        scoretwo: 1,
        teamone: "rmd",
        teamtwo: "atm"
    },
    {
        scoreone: 3,
        scoretwo: 1,
        teamone: "chelsea",
        teamtwo: "tottenham"
    }
]

let players = [
    {
        id: 1,
        Name: "karim ben zima",
        numero: "numero 9",
        position: "forward",
        team: "real madrid",
        age: "35"
    },
    {
        Name: "zidane",
        numero: "numero 10",
        position: "midfender",
        team: "realmadrid",
        age: "35",
        id: 2
    }
]

let users = [
    {
        firstName: "ali",
        lastName: "ben ali",
        email: "ali@gmail.com",
        pwd: "ali-1996",
        id: 1,
        role: "client"
    },
    {
        firstName: "slim",
        lastName: "nejmaoui",
        email: "slim@gmail.com",
        pwd: "slim1987",
        id: 2,
        role: "admin"
    },
    {
        firstName: "samah",
        lastName: "chraiti",
        email: "samah@gmail.com",
        pwd: "samah-1988",
        id: 3
    }
]


let stadiums = [
    {
        id: 1,
        name: "menzah",
        country: "tunis",
        capacite: "40000",

    },
    {
        id: 2,
        name: "rades",
        country: "tunisia",
        capacite: "60000",

    }
]


function generateId(T) {

    var max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
        for (var i = 1; i < T.length; i++) {

            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }
    return (max);
}


//***creations des apll backend **** */

// create express aplication 

const app = express();

//***configurations de l application **** */

//***importaion  models **** */
const Coache = require("./models/coaches");




//config app by baodyparser to parse object

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// config images path 

app.use('/images', express.static(path.join('backend/images')))

// MIME_TYPE  (only images)


const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'

}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


//***traitements logiques dess request  **** */

const fs = require('fs');
const coache = require('./models/coaches');

app.get("/data", (req, res) => {
    console.log("here into get all matches");
    fs.readFile('backend/models/matches.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        // console.log(data);
        obj = JSON.parse(data);
        for (let i = 0; i < obj.length; i++) {
            let x = new Match(obj[i]);
            x.save();
        }
    });
    res.json({ message: "data save into DB" })
});



app.post("/coaches", (req, res) => {

    console.log("here into add coache", req.body);

    let coache = new Coache({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,

    })
    coache.save((err, doc) => {
        if (err) {

            res.json({ message: "problem" })
        } else {

            res.json({ message: "add widh success" });
        }


    });

})

app.get("/coaches", (req, res) => {
    console.log("here into get all coaches");

    Coache.find().then((docs) => {

        res.json({ coaches: docs });
    })


})






/***  traitement logique users *****/




// traitements du request : login ***
// app.post("/users/login", (req, res) => {

//     console.log("here this object", req.body);

//     User.findOne({ email: req.body.email }).then((findedUser) => {
//         if (!findedUser) {

//             res.json({ message: "0" })

//         }



//         return bcrypt.compare(req.body.pwd, findedUser.pwd);
//     })
//         .then((pwdResult) => {

//             console.log("here compare result", pwdResult);

//             if (!pwdResult) {

//                 console.log("here compare widh pwd incorrect",);
//                 res.json({ message: "1" });

//             } else {

//                 User.findOne({ email: req.body.email }).then((finalUser) => {

//                     let user = {

//                         fName: finalUser.firstName,
//                         lName: finalUser.lastName,
//                         role: finalUser.role,


//                     };

//                     res.json({ message: "2", user: user });


//                 })

//             }

//         })



//     // let isFounded = false;
//     // let findUser = {};

//     // for (var i = 0; i < users.length; i++) {

//     //     if (users[i].email == req.body.email && users[i].pwd == req.body.pwd) {

//     //         isFounded = true;
//     //         findUser = {
//     //             firstName: users[i].firstName,
//     //             lastName: users[i].lastName,
//     //             email: users[i].email,
//     //             role: users[i].role,



//     //         }


//     //         break;

//     //     }
//     // }
//     // res.json({ isFounded: isFounded, user: findUser })

// })







app.post("/weather", (req, res) => {

    console.log("here into country", req.body);

    let country = req.body.country
    const apiKey = "b501745c665102fc455d4ebae6612cb5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`

    axios
        .get(apiUrl)
        .then((response) => {
            console.log('Here response', response);
            // const weather = response.data.main;
            // console.log('Here weather  main', weather);
            const result = {
                temp: response.data.main.temp,
                humidity: response.data.main.temp,
                windspeed: response.data.wind.speed,
                icone: response.data.weather[0].icon,

            }
            res.json({ result: result })
        });
});

app.get("/apiTeams", (req, res) => {

    let apikey = "30f8c3b0-55d8-11ed-8597-7fe8344c6c18";

    var options = {
        url: `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${apikey}&country_id=48`,


    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            let apiTeams = JSON.parse(body).data;
            console.log("here data into api", apiTeams);
            res.json({
                teamsapi: apiTeams,
            });
        }
    }
    request(options, callback);

});






// traitements du request :  add stadium


// all busness logique = tous le traitement logique
//matches
//teams
// ....extra 


//***exportations de la application **** */


app.use('/users', userRoute)
app.use('/matches', matcheRoute)
app.use('/teams', teamsRoute)
app.use('/players', playerRoute)
app.use('/stadium', stadiumRoute)


// app is importable from another files

module.exports = app;