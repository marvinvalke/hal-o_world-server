const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");


const UserModel = require("../models/User.model.js");

// USER CAN GO TO HIS PROFILE
router.get("/profile", (req, res) => {
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
  router.patch('/profile/edit' , (req,res,next) =>{
    console.log('we are here')
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
  router.delete("/profile/delete", (req, res, next) => {
    const profileId = req.session.loggedInUser._id;
    UserModel.findByIdAndDelete(profileId)
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
router.get("/profile/missions", (req, res) => {
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

router.post("/profile/missions", (req, res) =>{
  const profileId = req.session.loggedInUser._id;
  const {mission} = req.body;
  UserModel.findById(profileId)
      .populate("MissionsAdded", mission)
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