const express = require ('express');
const router = express.Router();
const Scraper = require('../scraper/getHorseStats');

// middleware to use for all requests
router.use( async function(req, res, next) {
    console.log("############ running scraper ###############")
     return next();   
  });

router.post("/horsestats",async (req, res) => {
    console.log("inside default")
    console.log(req.body.horseId)
    // console.log(JSON.stringify(await Scraper.getHorseStats(1743)));
    const hstats= await Scraper.getHorseStats(req.body.horseId);
    console.log("🚀 ~ file: scraper.js ~ line 15 ~ router.get ~ hstats", hstats)
    res.send(JSON.stringify(hstats));
    });

module.exports = router