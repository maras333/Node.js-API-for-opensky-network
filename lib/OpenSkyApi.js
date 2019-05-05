const axios = require('axios');

class OpenSkyApi {
  /**
   * @param {string} opt.apiEndpoint api http endpoint
   */
  constructor(opts) {
    this.apiEndpoint = `https://${opts.login}:${opts.password}@opensky-network.org/api`;
    this.flightsByAircraft = this.flightsByAircraft.bind(this);
    this.arrivalsByAirport = this.arrivalsByAirport.bind(this);
  }

  /**
   * @param {string} params.icao24 Unique ICAO 24-bit address of the transponder in hex string representation. 
   * All letters need to be lower case
   * @param {number} params.begin Start of time interval to retrieve flights for as Unix time (seconds since epoch)
   * @param {number} params.end End of time interval to retrieve flights for as Unix time (seconds since epoch)
   */
  async flightsByAircraft(params) {
    let {icao24, begin, end} = params;
    try {
      const response = await axios({
        method: 'get',
        url: `${this.apiEndpoint}/flights/aircraft?icao24=${icao24}&begin=${begin}&end=${end}`,
        responseType: 'application/json'
      })
      return response
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * @param {string} params.airport ICAO identier for the airport
   * @param {number} params.begin Start of time interval to retrieve flights for as Unix time (seconds since epoch)
   * @param {number} params.end End of time interval to retrieve flights for as Unix time (seconds since epoch)
   */
  async arrivalsByAirport(params) {
    let {airport, begin, end} = params;
    try {
      const response = await axios({
        method: 'get',
        url: `${this.apiEndpoint}/flights/arrival?airport=${airport}&begin=${begin}&end=${end}`,
        responseType: 'application/json'
      })
      return response
    } catch(e) {
      console.log(e)
    }    
  }

}

module.exports = OpenSkyApi;