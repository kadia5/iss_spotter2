const { fetchMyIP } = require('./iss');
const { fetchMyCoord } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchMyCoord("209.141.130.169", (error,data) =>{
  console.log(error, data);

});

// fetchMyIP2("totally not an ip", (error,data) =>{
//   console.log(error, data);
    
// });
