const OpenSkyApi = require('../lib/OpenSkyApi');
const openSkyApi = new OpenSkyApi({login: 'abc', password: 'xyz'});


(async function () {
  let res1 = await openSkyApi.arrivalsByAirport({airport: 'EPWA', begin: 1556928000, end: 1557014400});
  let resArray1 = res1.data;
  console.log(resArray1.length);

  let res2 = await openSkyApi.flightsByAircraft({icao24: '3c675a', begin: 1556928000, end: 1557014400});
  let resArray2 = res2.data;
  console.log(resArray2.length);

})()

