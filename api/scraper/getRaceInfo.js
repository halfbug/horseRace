
const got = require('got');
/* Get Horse Stats */
const { getHorseStats } = require('./getHorseStats');

const getRaceInfo = async (raceId) => {
  const url = `https://racing-api.zed.run/api/v1/races/${raceId}`;
  const options = {
    headers: {
      'Host': 'racing-api.zed.run',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
      'accept': 'application/json, text/plain, */*',
      'authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjcnlwdG9maWVsZF9hcGkiLCJleHAiOjE2MjA5NjYzMjksImlhdCI6MTYxODU0NzEyOSwiaXNzIjoiY3J5cHRvZmllbGRfYXBpIiwianRpIjoiMDZkYjgwZGUtODBlMS00ZTM4LWExZDQtZmM4MzZiZTUyZmRlIiwibmJmIjoxNjE4NTQ3MTI4LCJzdWIiOnsiZXh0ZXJuYWxfaWQiOiI1Zjg1YzBlNi02OTUzLTQxMDEtOGE5My0yYzg0NWJmODY4MDkiLCJpZCI6Mjg3NDgsInB1YmxpY19hZGRyZXNzIjoiMHhjRGNiOUI5MDI2NzJGZWQxMUFENDM5ODA1Q2MyMDc3REZBQjBmRTdGIiwic3RhYmxlX25hbWUiOiJzdGFibGUgNTM1MzEwNjkifSwidHlwIjoiYWNjZXNzIn0.MbEARYVIsSGTkhV4Vnlo4QZRGjUKN6OTclpBjufGthST9N1eQKG5RR3D1DnApJKDCoq-gLbYnoy9gP9n3oF8Gg',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
      'origin': 'https://zed.run',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://zed.run/',
      'accept-language': 'en-US,en;q=0.9'
    },
    throwHttpErrors: false,
  }
  const { body, statusCode } = await got(url, options);
  const parsedBody = JSON.parse(body);
  
  const raceInfo = {};
  raceInfo.title = `${parsedBody.name} ● ${parsedBody.city} ● ${parsedBody.country}`;
  raceInfo.distance = parsedBody.length;
  raceInfo.startTime = 'placeholder';
  raceInfo.horses = await getHorsesData(Object.values(parsedBody.gates));
  raceInfo.openGates = '';

  let olderIds = Object.values(parsedBody.gates)

  for (i = 0; i < 13; i++) {
    if (!Object.keys(parsedBody.gates).includes(String(i)) && i != 0) {
      raceInfo.openGates.concat(`[Gate ${String(i)}]()`)
    }
  }

  raceInfo.oldIds = olderIds.map((item) => {
    if (item['horse_id']) {
      return item['horse_id'];
    } else {
      return item;
    }
  });
  
  console.log(`Got Race Data For Race ${raceId}!`)

  //await fs.writeFileSync(`./raceInfo-${raceId.replace('/', '')}.json`, JSON.stringify(raceInfo, ' ', 2));
  console.log('raceInfo',raceInfo)
  return raceInfo;
}

async function getHorsesData(horseIds) {

  const getHorses = horseIds.map(async (item) => {
    if (item['horse_id']) {
      return await getHorseStats(item['horse_id']);
    } else {
      return await getHorseStats(item);
    }
  });

  const allHorseData = await Promise.all(getHorses);
  return allHorseData;
};

module.exports = {
  getRaceInfo,
}