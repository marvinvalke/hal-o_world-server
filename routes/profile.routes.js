const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    //calls whatever is to be executed after the isLoggedIn function is over
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized user",
      code: 401,
    });
  }
};

const UserModel = require("../models/User.model.js");
const MissionsModel = require("../models/Mission.model");
const Mongoose = require("mongoose");

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
router.patch("/profile/edit", isLoggedIn, (req, res, next) => {
  const profileId = req.session.loggedInUser._id;
  const { username, email, password, profilePic } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  let editedProfile = {
    username,
    email,
    password: hash,
  };
  if (profilePic) {
    editedProfile.profilePic = profilePic;
  }
  UserModel.findByIdAndUpdate(
    profileId,
    { $set: editedProfile },
    { new: true }
  );
});

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
});

// USER CAN ACCESS THE MISSIONS HE APPLYED FOR
router.get("/profile/mymissions", isLoggedIn, (req, res) => {
  const profileId = req.session.loggedInUser._id;
  UserModel.findById(profileId)
    .populate("MissionsCreated")
    .populate("MissionsAdded")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

// FORM TO CREATE MISSIONS
router.post("/profile/mymissions/create", isLoggedIn, (req, res) => {
  let profileId = req.session.loggedInUser._id;
  const { name, description, image, duration, difficulty, reviews, id } =
    req.body;
  console.log(req.body);

  MissionsModel.create({ name, description, image, duration, difficulty })
    .then((response) => {
      UserModel.findByIdAndUpdate(profileId, {
        $push: { MissionsCreated: response._id },
      })
        .then(() => {
          res.status(200).json(response);
        })
        .catch((err) => {
          res.status(500).json({
            error: "Something went wrong",
            message: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});
//EDIT/UPDATE MISSION DETAILS
router.patch("/profile/mymissions/:id", isLoggedIn, (req, res) => {
  let id = req.params.id;
  const { name, description, image, duration, difficulty, reviews } = req.body;
  MissionsModel.findByIdAndUpdate(
    id,
    { $set: { name, description, image, duration, difficulty, reviews } },
    { new: true }
  )
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

//DELETE MISSION FROM PROFILE
router.delete("/profile/mymissions/:id", isLoggedIn, (req, res) => {
  const { id } = req.params;
  let profileId = req.session.loggedInUser._id;

  MissionsModel.findByIdAndDelete(id)

    .then((response) => {
      UserModel.findByIdAndUpdate(profileId, { $pull: { MissionsAdded: id , MissionsCreated: id} })
        .then(() => {
          res.status(200).json(response);
        })
        .catch((err) => {
          res.status(500).json({
            error: "Something went wrong",
            message: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.post("/profile/mymissions", isLoggedIn, (req, res) => {
  const profileId = req.session.loggedInUser._id;
  const { id } = req.body;
  UserModel.findByIdAndUpdate(profileId, { $addToSet: { MissionsAdded: id } })
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
