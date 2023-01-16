const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");
const router = express.Router()

const Match = require("../models/match");



// traitements du request : get all matches

router.get("/", async (req, res) => {
    console.log("here into get all matches");
    try {
        const matches = await Match.find()

        res.json(matches);
    } catch (error) {

    }

})



// traitements du request : get matcheById

router.get("/:id", async (req, res) => {
    console.log("here into get matcheById", req.params.id);
    try {

        const match = await Match.findOne({ _id: req.params.id })

        res.json(match);


    } catch (error) {
        console.log(error);
    }



    // let match = matches.find((obj) => { return obj.id == req.params.id; })
    // for (let i = 0; i < matches.length; i++) {
    //     if (matches[i].id == req.params.id) {
    //         match = matches[i]
    //         break;
    //     }

    // }


});

// traitements du request :add matches
router.post("/", async (req, res) => {


    console.log("here into add matches", req.body);
    try {
        let match = new Match({

            scoreone: req.body.scoreone,
            scoretwo: req.body.scoretwo,
            teamone: req.body.teamone,
            teamtwo: req.body.teamtwo


        })
        const res = await match.save()
        res.json(res)



    } catch (error) {
        console.log(error);
    }



    // match.id = generateId(matches) + 1;
    // matches.push(match);



})



// traitements du request :delete matches
router.delete("/:id", async (req, res) => {
    console.log("here intà delete", req.params.id);

    try {
        const match = await Match.deleteOne({ _id: req.params.id })

        if (response.deletedCount == 1) {

            res.json(match);

        }


    } catch (error) {
        res.json(error)
    }

    // for (let i = 0; i < matches.length; i++) {
    //     if (matches[i].id == req.params.id) {
    //         matches.splice(i, 1);
    //         break;
    //     }

    // }





})
// traitements du request :edit matches

router.put("/:id", async (req, res) => {


    console.log("here into edit match Body", req.body);
    console.log("here into edit match Id", req.params.id);

    try {
        const match = await Match.updateOne({ _id: req.body._id }, req.body)

        if (response.nModified == 1) {

            res.json(match);

        }


    } catch (error) {

    }


    // for (let i = 0; i < matches.length; i++) {
    //     if (matches[i].id == req.params.id) {
    //         matches[i] = req.body
    //         break;
    //     }

    // }





})


// traitements du request :search matches

router.post("/search", (req, res) => {

    console.log("here into search match Body", req.body);
    let matchesfindeds = [];
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].scoreone == req.body.scoreone && matches[i].scoretwo == req.body.scoretwo) {
            matchesfindeds.push(matches[i])
        }

    }
    res.json({ matches: matchesfindeds });



})


module.exports = router;