
const { fetchMyIP } = require('./iss_promised');
const { fetchMyCoordsByIP } = require('./iss_promised');
const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(fetchMyCoordsByIP)
  .then(fetchISSFlyOverTimes)
  // .then(nextISSTimesForMyLocation)
  .then(body => console.log(JSON.parse(body)));
 
  nextISSTimesForMyLocation()
  .then((passTimes) => {
    // printPassTimes(passTimes);
  })
  // .catch((error) => {
  //   console.log("It didn't work: ", error.message);
  // });

  //above commented out code shows when an error happens it starts again from the catch-like a checkpoint in a game
