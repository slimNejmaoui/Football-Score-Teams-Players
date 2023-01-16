const express = require("express");
const router = express.Router()
const Player = require("../models/player");

// import multer module

const multer = require('multer')
// import path module

const path = require('path');
const { async } = require("rxjs/internal/scheduler/async");

// config images path 

router.use('/images', express.static(path.join('backend/images')))

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
/***  traitement logique player *****/



router.get("/", async (req, res) => {

    try {

        let players = await Player.find()

        res.json(players);


    } catch (error) {

        console.log(error);

    }





})
// traitements du request : get playerById

router.get("/:id", async (req, res) => {

    try {
        console.log("here onto  plaeyerbyId", req.params.id);

        const user = await Player.findOne({ _id: req.params.id })


        res.send(user)



    } catch (error) {
        console.log(error);

    }




    // let player = players.find((obj) => { return obj.id == req.params.id; })




})


// traitements du request : add playerById

// router.post("/players/", (req, res) => {

//     console.log("here into add player", req.body);

//     let player = req.body;
//     player.id = generateId(players) + 1;

//     players.push(player);

//     res.json({ message: "add widh succes" });

// })
router.post("/", multer({ storage: storage }).single('img'), async (req, res) => {


    try {

        const url = req.protocol + '://' + req.get('host');


        let player = new Player({


            name: req.body.name,
            numero: req.body.numero,
            position: req.body.position,
            team: req.body.team,
            age: req.body.age,
            avatar: url + '/images/' + req.file.filename



        });

        let user = await player.save()


        res.json(user)




    } catch (error) {
        console.log("this error", error);

    }

})

// traitements du request : EDIT PLAYER

router.put("/:id", async (req, res) => {

    console.log("here into update player", req.body);
    console.log("here into update player", req.params.id);


    try {


        let user = await Player.updateOne({ _id: req.body._id }, req.body)

        if (response.nModified == 1) {

            res.send(user);

        }

    }
    catch (error) {
        console.lo(error);

    }



    // for (let i = 0; i < players.length; i++) {
    //     if (players[i].id = req.params.id) {

    //         players[i] = req.body
    //         break;
    //     }


    // }
    //

});

// traitements du request : delete PLAYER

router.delete("/:id", async (req, res) => {


    try {

        console.log("here into delete player", req.params.id);
        user = await Player.deleteOne({ _id: req.params.id })

        if (response.deletedCount == 1) {


            res.json(user)

        }



    } catch (error) {

        res.json(error);
    }


})


module.exports = router;