const express = require("express");
const router = express.Router()

const bcrypt = require('bcrypt')

// import multer module

const multer = require('multer')
// import path module

const path = require('path');


var jwt = require('jsonwebtoken');


const User = require("../models/user");
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


/***  traitement logique users *****/

// traitements du request : get all users

router.get("/", async (req, res) => {
    try {

        console.log("here into get all Users");

        const users = await User.find()

        res.json(users);

    } catch (error) {


        console.log(error);
    }



})


// traitements du request : login ***
// router.post("/users/login", (req, res) => {

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

// router.post("/login", async (req, res) => {


//     let data = req.body;


//     let user = await User.findOne({ email: data.email })

//     if (!user) {


//         res.status(404).json({ message: "email or password is not valid" })
//     } else {

//         validPass = bcrypt.compareSync(data.pwd, user.pwd)
//         if (!validPass) {
//             res.status(401).json({ message: "email or password is not valid" })

//         } else {

//             let payload = {

//                 userId: user._id,
//                 role: user.role,
//                 email: user.email
//             }

//             const token = jwt.sign({ payload }, "12345678")


//             res.status(200).json({
//                 mytoken: token, userId: user._id,
//                 role: user.role,
//                 email: user.email
//             })

//         }


//     }





// })




// traitements du request :signup users


// router.post("/login", (req, res, next) => {

//     try {
//         let user = User.findOne({ email: req.body.email })
//         if (!user) {
//             return res.status(404).json(user)
//         }
//         fetchedUser = user;
//         var passwordIsValid = bcrypt.compare(req.body.pwd, user.pwd);

//         if (!passwordIsValid) {
//             return res.status(401).json(passwordIsValid)
//         }
//         let token = jwt.sign(
//             {
//                 email: fetchedUser.email,
//                 userId: fetchedUser._id,
//                 userRole: fetchedUser.userRole,

//             },
//             "secret_this_should_be_longer",
//             { expiresIn: "5min" }
//         );
//         res.status(200).json({
//             token: token,
//             expiresIn: 300,
//             userId: fetchedUser._id,
//             userRole: fetchedUser.role,

//         });
//         console.log('here role', fetchedUser.role);
//     } catch (error) {
//         console.log(error);
//     }


// })
router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.json({
                message: "Auth failed no such user"
            })
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.pwd, user.pwd);
    }).then(result => {
        if (!result) {
            return res.json({
                message: "Auth failed inccorect password"
            })
        }
        const token = jwt.sign(
            {
                email: fetchedUser.email,
                userId: fetchedUser._id,
                userRole: fetchedUser.userRole,
                statut: fetchedUser.statut,

            },
            "secret_this_should_be_longer",
            { expiresIn: "5min" }
        );
        res.status(200).json({
            token: token,
            expiresIn: 300,
            userId: fetchedUser._id,
            userRole: fetchedUser.role,
            statut: fetchedUser.statut,



        });
        console.log('here role', fetchedUser.role);
    })
        .catch(e => {
            console.log(e)
        })
})








router.post("/signup", multer({ storage: storage }).single('img'), async (req, res) => {
    console.log("here into signup", req.body);
    try {
        bcrypt.hash(req.body.pwd, 10).then(async (cryptedpwd) => {
            const url = req.protocol + '://' + req.get('host');
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedpwd,
                role: req.body.role,
                avatar: url + "/images/" + req.file.filename
            });
            saveUser = await user.save();
            res.send(saveUser);
        })
    } catch (error) {
        console.log("here into signup", req.body);
        res.send(error);
    }
});
// traitements du request : delete user

router.delete("/:id", async (req, res) => {
    console.log("here intà delete", req.params.id);

    try {


        let user = await User.deleteOne({ _id: req.params.id })




        res.json(user);






    } catch (error) {

    }


})

// traitements du request : edit user


router.put("/:id", async (req, res) => {


    console.log("here into edit user Body", req.body);
    console.log("here into edit user Id", req.params.id);
    try {
        let user = await User.updateOne({ _id: req.body._id })

        if (response.nModified == 1) {
            res.json(user);

        }


    } catch (error) {

    }


    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].id == req.params.id) {
    //         users[i] = req.body
    //         break;
    //     }

    // }


    res.json({ message: "edit widh success" });

})

// traitements du request : get userbyid
router.get("/:id", async (req, res) => {
    console.log("here into get userById", req.params.id);

    try {
        let user = await User.findOne({ _id: req.params.id })



        res.json({ user });



    } catch (error) {

    }



});



module.exports = router