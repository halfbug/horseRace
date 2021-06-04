const express = require ('express');
const router = express.Router();
const Scraper = require('../scraper/getHorseStats');
const RScraper = require('../scraper/getRaceInfo');

// middleware to use for all requests
router.use( async function(req, res, next) {
    // console.log("############ running scraper ###############")
     return next();   
  });

router.post("/horsestats",async (req, res) => {
    // console.log("inside default")
    // console.log(req.body.horseId)
    // console.log(JSON.stringify(await Scraper.getHorseStats(1743)));
    const hstats= await Scraper.getHorseStats(req.body.horseId);
    // console.log("🚀 ~ file: scraper.js ~ line 15 ~ router.get ~ hstats", hstats)
    res.send(JSON.stringify(hstats));
    });

    router.post("/racestats",async (req, res) => {
        console.log("inside race stats")
        console.log(req.body.raceId)
        // console.log(JSON.stringify(await Scraper.getHorseStats(1743)));
        const rstats= await Scraper.getHorseStats(req.body.raceId);
        console.log("🚀 ~ file: scraper.js ~ line 15 ~ router.get ~ rstats", rstats)
        res.send(JSON.stringify(rstats));
        });

module.exports = router