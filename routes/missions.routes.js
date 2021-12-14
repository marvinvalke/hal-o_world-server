const express = require('express');
const router = express.Router();

let MissionsModel = require('../models/Mission.model')
let ReviewModel = require('../models/Review.model')

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
   

router.get('/missions', (req, res) => {
    MissionsModel.find()
         .then((missions) => {
              res.status(200).json(missions)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         })         
})

//this will show form to create missions
router.post('/missions/create', isLoggedIn, (req, res) => {  
    const profileId = req.session.loggedInUser._id;
    const {name, description, image, duration, difficulty, reviews} = req.body;
    // console.log(req.body)

    MissionsModel.create({name, description, image, duration, difficulty, reviews})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

//this will show missions details
router.get('/missions/:missionId',  (req, res) => {
     console.log(req.params.missionId)

    MissionsModel.findById(req.params.missionId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          console.log(err)
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

//this will allow user to edit missions details
router.patch('/profile/mymissions/:id', isLoggedIn, (req, res) => {
    let id = req.params.id
    const {name, description, image, duration, difficulty, reviews} = req.body;
    MissionsModel.findByIdAndUpdate(id, {$set: {name, description, image, duration, difficulty, reviews}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

router.delete('/profile/mymissions/:id', isLoggedIn, (req, res) => {
     let id = req.params._id
    MissionsModel.findByIdAndDelete(id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

router.get('/missions/:missionId/review', isLoggedIn, (req, res) => {
    const {missionId} = req.params;
    MissionsModel.findOne({_id: missionId})
    .populate('reviews')
     .then((response) => {
         let review = response.reviews.map((review) => review.rate);
         let total = review.reduce((total, rating) => {
            return total + rating
         }, 0);
         let averageRating = total/review.length; 
          res.status(200).json([{ rate: averageRating }])
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

router.post('/missions/:missionId/review',  isLoggedIn, (req, res) => {
    const userId = req.session.loggedInUser._id;
    const {rate, date, comments, missionId} = req.body;
    ReviewModel.create({rate, date, comments, missionId})
     .then((response) => {
          res.status(200).json(response);

          MissionsModel.findByIdAndUpdate({missionId}) 
          .then((response) => {
            res.status(200).json(response)
          } )          
          
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})


module.exports = router;