const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {  
  if (req.session.loggedInUser) {
      //calls whatever is to be executed after the isLoggedIn function is over
      next()
  }
  else {
      res.status(401).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};

const UserModel = require("../models/User.model.js");

// USER CAN GO TO HIS PROFILE
router.get("/profile", isLoggedIn, (req, res) => {
    const profileId = req.session.loggedInUser._id;
    UserModel.findById(profileId)
      .populate("MissionsAdded")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json({
          error: "Something went wrong",
          message: err,
        });
      });
  });


  // USER CAN EDIT HIS PROFILE
  router.patch('/profile/edit' , isLoggedIn, (req,res,next) =>{
    const profileId = req.session.loggedInUser._id;
    const {username, email, password, profilePic} = req.body
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    let editedProfile = {
        username,
        email,
        password:hash,
    }
    if (profilePic) {
        editedProfile.profilePic = profilePic;
      }
    UserModel.findByIdAndUpdate(profileId, {$set:editedProfile}, {new: true})
  })
  

  // USER CAN DELETE HIS PROFILE
  router.delete("/profile", isLoggedIn, (req, res, next) => {
    const profileId = req.session.loggedInUser._id;
    UserModel.findByIdAndDelete(profileId)
      // .populate("MissionsAdded")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json({
          error: "Something went wrong",
          message: err,
        });
      });
  })

// USER CAN ACCESS THE MISSIONS HE APPLYED FOR
router.get("/profile/mymissions", isLoggedIn, (req, res) => {
    const profileId = req.session.loggedInUser._id;
    UserModel.findById(profileId)
      .populate("MissionsAdded")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({              

          error: "Something went wrong",
          message: err,
        });
      });
  });

router.post("/profile/mymissions", isLoggedIn, (req, res) =>{
  const profileId = req.session.loggedInUser._id;
  const {id} = req.body;
  UserModel.findByIdAndUpdate(profileId, {$addToSet: {MissionsAdded: id}})
      // .populate("MissionsAdded", {mission}) //, mission
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json({
          error: "Something went wrong",
          message: err,
        });
      });
      

});

module.exports = router;