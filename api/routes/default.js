const express = require ('express');
const router = express.Router();

// middleware to use for all requests
router.use( async function(req, res, next) {
    console.log("#############middleware#################")
      next();   
  });

router.get("/", (req, res) => {
    console.log("inside default")
    res.send("hello world")
    });

module.exports = router