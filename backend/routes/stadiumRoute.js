const express = require("express");
const { async } = require("rxjs/internal/scheduler/async");

const router = express.Router();

const Stadium = require("../models/stadium");



// traitements du request : stadiums

router.post("/", async (req, res) => {

    try {
        let stadium = new Stadium({


            name: req.body.name,
            capacite: req.body.capacite,
            country: req.body.country,


        });

        const stadiums = await stadium.save()



        res.json(stadiums)






    } catch (error) {

        console.log("error", error);
    }



})

router.get("/", async (req, res) => {
    console.log("here into get all stadium");
    try {

        const stadiums = await Stadium.find()


        res.json(stadiums)




    } catch (error) {

        console.log("this Error", error);

    }





})

router.delete("/:id", async (req, res) => {

    console.log("here into delete this object", req.params.id);
    try {

        let stadium = await Stadium.deleteOne({ _id: req.params.id })


        res.json(stadium)



    } catch (error) {
        console.log(error);
    }



})


router.get("/:id", async (req, res) => {

    console.log("here ino this object", req.params.id);

    try {
        const stadium = await Stadium.findOne({ _id: req.params.id })

        res.json(stadium)

    } catch (error) {
        console.log(error);
    }



    // let findStadium
    // for (let i = 0; i < stadiums.length; i++) {

    //     if (stadiums[i].id == req.params.id) {

    //         findStadium = stadiums[i];
    //         break;

    //     }
    // }
    // res.json({ stadium: findStadium })
})

router.put("/:id", async (req, res) => {


    try {

        const stadium = await Stadium.updateOne({ _id: req.body }, req.body)


        if (response.nModified == 1) {

            res.json(stadium)
        }



    } catch (error) {
        console.log(error);
    }


    // for (let i = 0; i < stadiums.length; i++) {
    //     if (stadiums[i].id == req.body.id) {
    //         stadiums[i] = req.body;
    //         break;

    //     }
    // }
    // res.json({ message: "edit widh succes" })



})


module.exports = router;