const { fetchMyIP } = require('./iss');
const { fetchMyCoordByIP } = require('./iss');
const { fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchMyCoordByIP("209.141.130.169", (error,data) =>{
  console.log(error, data);

});


const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});

// fetchISSFlyOverTimes("{ latitude: '49.27670', longitude: '-123.13000' }", (error,data) =>{
//   console.log(error, data);

// });


// fetchMyIP2("totally not an ip", (error,data) =>{
//   console.log(error, data);
    
// });
