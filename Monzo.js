'use strict';

const request = require('request');
const config = require('./config');

class Monzo {

  /**
   * Create a new Monzo instance
   *
   * @constructor
   * @param {String} apiKey The API key for accessing the Monzo API
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.request = request.defaults({
      baseUrl: config.monzo.url,
      method: 'GET',
      json: true,
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
  }

  /**
   * Retrieve the accounts for the current user
   *
   * @return {Promise}
   */
  getAccounts() {
    return new Promise((resolve, reject) => {
      this.request('/accounts', (err, res) => {
        if (err) {
          return reject(err);
        }
        if (res.statusCode !== 200) {
          return reject(res.body);
        }
        return resolve(res.body.accounts);
      });
    });
  }
  
  /**
   * Get the balance and current spend for an account
   *
   * @param {String} accountId The ID associated with the given account
   * @return {Promise} 
   */
  getBalance(accountId) {
    return new Promise((resolve, reject) => {
      let query = { 'account_id': accountId };
      this.request({ url: '/balance', qs: query }, (err, res) => {
        if (error) {
          return reject(err);
        }
        if (res.statusCode !== 200) {
          return reject(res.body);
        }
        return resolve(res.body);
      });
    });
  }
}

module.exports = Monzo;
