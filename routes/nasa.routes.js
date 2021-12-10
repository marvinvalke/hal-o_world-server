const express = require('express');
const router = express.Router();
const axios = require("axios");

/*

https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F&date=2020-${date.month}-${date.day}`

*/
router.get("/nasa", (req, res, next) => {
    axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F`
      )
      .then((response) => {
        res.status(200).json(response.data);
      })
  
      .catch((err) => {
        res.status(500).json({
             error: 'Something went wrong',
             message: err
        })
   }) 
  });

  router.post("/nasa/bdaypic", (req, res, next) => {
      const {day, month} = req.body
    axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F&date=2020-${month}-${day}`
      )
      .then((response) => {
        res.status(200).json(response.data);
      })
  
      .catch((err) => {
        res.status(500).json({
             error: 'Something went wrong',
             message: err
        })
   }) 
  });

  module.exports = router;