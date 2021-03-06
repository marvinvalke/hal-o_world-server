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
          .populate('reviews')
         .then((missions) => {
              let cloneMissions = JSON.parse(JSON.stringify(missions))
             let missionsReviewed =  cloneMissions.map((elem) => {
                 // console.log(elem)
               let total = elem.reviews.reduce((total, reviewElem) => {
                    return total + reviewElem.rate
                 }, 0);
               
                 let averageRating = total/elem.reviews.length; 
 
                 elem.rate = averageRating
               return elem
              })

               res.status(200).json(missionsReviewed)
              
         })
         .catch((err) => {
              console.log(err)
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


router.get('/profile/mymissions/:missionId/review', isLoggedIn, (req, res) => {
    const {missionId} = req.params;
    MissionsModel.findById(missionId)
    .populate('reviews')
     .then((response) => {
         let review = response.reviews.map((review) => review.rate);
         let total = review.reduce((total, rating) => {
            return total + rating
         }, 0);
         let averageRating = total/review.length; 
          res.status(200).json({ rate: averageRating })
     })
     .catch((err) => {
          console.log(err)
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

router.post('/profile/mymissions/:missionId/review', isLoggedIn, (req, res) => {
    const userId = req.session.loggedInUser._id;
// const userId = '61b775de7fc4ab0c82bb7e3e'
    const {missionId} = req.params; 
    const {rate} = req.body;
    ReviewModel.create({rate, missionId, userId})
     .then((response) => {
          // res.status(200).json(response);

          MissionsModel.findByIdAndUpdate(missionId, {$push: { reviews: response._id}})

          .then((response) => {
            res.status(200).json(response)
          } )          
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
     })
     .catch((err) => {
          console.log(err);
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})


module.exports = router;