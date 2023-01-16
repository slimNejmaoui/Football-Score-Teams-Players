const { response } = require("express");
const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");

const router = express.Router();
// traitements du request : add team
const Team = require("../models/team");


router.post("/", async (req, res) => {


    console.log("here into add teams", req.body);
    try {
        let team = new Team({

            Name: req.body.Name,
            numero: req.body.numero,
            Stadium: req.body.Stadium,
            Country: req.body.Country,
            Owner: req.body.Owner,


        })

        const result = await team.save();



        res.json(result);
    } catch (error) {
        console.log(error);
    }



})

// traitements du request : gettALL teams 
router.get("/", async (req, res) => {
    try {
        const team = await Team.find()

        res.json(team);
    } catch (error) {

        res.json(error);

    }

})


// traitements du request : gettteamsById
router.get("/:id", async (req, res) => {
    try {
        const teams = await Team.findOne({ _id: req.params.id })

        res.json(teams)

    } catch (error) {
        console.log(error);
    }




})

// traitements du request : Edit Team

router.put("/:id", async (req, res) => {

    try {
        const team = await Team.updateOne({ _id: req.body.id }, req.body).then(response)

        if (response.nModified == 1) {

            res.json(team);

        }

    } catch (error) {
        console.log(error);
    }





})

// traitements du request : delete Team

router.delete("/:id", async (req, res) => {

    try {
        const team = await Team.deleteOne({ _id: req.params.id })


        res.json(team)
    } catch (error) {
        res.json(error)
    }





})


module.exports = router;