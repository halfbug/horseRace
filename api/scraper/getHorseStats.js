const cheerio = require('cheerio');
const { stat } = require('fs');
const got = require('got');

const getHorseStats = async (zedId) => {
  // console.log('inside horse stats');
  const url = `https://knowyourhorses.com/horses/${zedId}`
  // console.log("🚀 ~ file: getHorseStats.js ~ line 8 ~ getHorseStats ~ url", url)
  
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
    },
    throwHttpErrors: false,
  }
  const { body, statusCode } = await got(url, options);
  if (statusCode == '500' && body.indexOf('but something went wrong.') >= 1) {
    const horseStats = {};
    horseStats.noData = true;
    horseStats.name = '';
    horseStats.zedId = zedId;
    horseStats.totalRaces = '';
    horseStats.totalWinPercentage = '';
    horseStats.winPercentageByDistance = '';
    horseStats.totalPlacePercentage = '';
    horseStats.placePercentageByDistance = '';
    horseStats.oddsByDistance = '';
    return horseStats;
  }
  const $ = cheerio.load(body);
  const horseStats = {};

  /* Zed Horse Name */
  horseStats.name = $('#collapse > div.card-body > div.horse-identifier > div > h3').text().trim() || '??';
  // console.log("🚀 ~ file: getHorseStats.js ~ line 35 ~ getHorseStats ~ horseStats.name", horseStats.name)

  const { totalOdds, winPercentageByDistance, placePercentageByDistance } = await getAllRacePlacements(zedId, horseStats.name);

  /* Zed Horse Id */
  horseStats.zedId = zedId;

  /* Total Races */
  horseStats.totalRaces = $('#main-area > div > div.horse-details.flex-column.flex-md-row > div.attributes.my-3.my-md-1 > div > div:nth-child(1) > div.card-body.d-flex.flex-wrap > div:nth-child(1)').eq(0).text().trim().replace('# of races ', '').replace(/L.*/, '') || '??';

  /* Total Win Percentage */
  horseStats.totalWinPercentage = $('#main-area > div > div.horse-details.flex-column.flex-md-row > div.attributes.my-3.my-md-1 > div > div:nth-child(1) > div.card-body.d-flex.flex-wrap > div:nth-child(2)').eq(0).text().replace('Win % ', '').replace('1st', '').trim() || '??';

  /* Win Percentage By Distance */
  horseStats.winPercentageByDistance = winPercentageByDistance;

  /* Total Place Percentage */
  horseStats.totalPlacePercentage = $('#main-area > div > div.horse-details.flex-column.flex-md-row > div.attributes.my-3.my-md-1 > div > div:nth-child(1) > div.card-body.d-flex.flex-wrap > div:nth-child(3)').eq(0).text().replace('Place % ', '').replace('1st or 2nd', '').trim() || '??';
  
  /* Place Percentage By Distance */
  horseStats.placePercentageByDistance = placePercentageByDistance;

  /* Odds By Distance */
  horseStats.oddsByDistance = {
    '1000': '??',
    '1200': '??',
    '1400': '??',
    '1600': '??',
    '1800': '??',
    '2000': '??',
    '2200': '??',
    '2400': '??',
    '2600': '??',
  }
  let distance = 0;
  let unparsedData = $('[data-chart-label-value="Average odds"]').attr('data-chart-tally-value');
  if (unparsedData) {
    let oddsData = JSON.parse(unparsedData);
    for (distance in oddsData) {
      if (oddsData[distance] == 'No data') {
        oddsData[`${distance.replace('m', '')}`] = '??';
      } else {
        oddsData[`${distance.replace('m', '')}`] = oddsData[distance];
      }
    }
    horseStats.oddsByDistance = oddsData;
  }
  // console.log("🚀 ~ file: getHorseStats.js ~ line 85 ~ getHorseStats ~ horseStats", horseStats)
  return horseStats;
}
 

const getAllRacePlacements = async (zedId, name) => {
  // console.log('inside placements')
  let totalRacePlacements = 0;
  let allRacePlacements = [];
  let allRaceOdds = [];
  let complete = false;
  let currentPage = 1;

  while (!complete) {
    let url = `https://knowyourhorses.com/horses/${zedId}?page=${currentPage}`
    let options = {
      headers: {
        'Host': 'knowyourhorses.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://knowyourhorses.com/horses/21833',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      throwHttpErrors: false,
    }
    let { body, statusCode } = await got(url, options);

    if (statusCode == 500 || currentPage >= 11) {
      complete = true;
    }
    let $ = cheerio.load(body);
    $('.race-placement').each((index, element) => {
      totalRacePlacements += 1;
      let currentRace = {};

      currentRace.position = ($(element).find('.position').eq(0).text().trim());
      currentRace.odds = parseFloat($(element).find('.odds').text().trim());
      currentRace.distance = ($(element).find('.event > a').text().trim().split('(')[1].replace(')', ''));
      
      if (!allRacePlacements[currentRace.distance]) allRacePlacements[currentRace.distance] = [];
      if (currentRace.position) allRacePlacements[currentRace.distance].push(currentRace);
    })
    currentPage += 1;
  }

  let winPercentageByDistance = {
    '1000m': '??',
    '1200m': '??',
    '1400m': '??',
    '1600m': '??',
    '1800m': '??',
    '2000m': '??',
    '2200m': '??',
    '2400m': '??',
    '2600m': '??',
  };
  let placePercentageByDistance = {
    '1000m': '??',
    '1200m': '??',
    '1400m': '??',
    '1600m': '??',
    '1800m': '??',
    '2000m': '??',
    '2200m': '??',
    '2400m': '??',
    '2600m': '??',
  };

  let totalRaces = 0;
  for (distance in allRacePlacements) {
    let wins = 0;
    let places = 0;
    for (race in allRacePlacements[distance]) {
      totalRaces += 1;
      if (allRacePlacements[distance][race].position == '1') wins += 1;
      if (allRacePlacements[distance][race].position == '2' || allRacePlacements[distance][race].position == '3') places += 1;
    }
    winPercentageByDistance[distance] = `${Number((wins / allRacePlacements[distance].length) * 100).toFixed(2)}%`;
    placePercentageByDistance[distance] = `${Number((places / allRacePlacements[distance].length) * 100).toFixed(2)}%`;
  }
  return {
    winPercentageByDistance,
    placePercentageByDistance,
  };
}

const roundToHundredth = (value) => {
  return Number(value.toFixed(2));
};

module.exports = {
  getHorseStats,
}