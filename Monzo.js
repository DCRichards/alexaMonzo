'use strict';

const request = require('request');
const config = require('./config');

class Monzo {

  /**
   * Create a new Monzo instance.
   *
   * @constructor
   * @param {String} apiKey The API key for accessing the Monzo API.
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
   * Retrieve the accounts associated with the current user.
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
   * Retrieve the balance and today's spend for an account.
   *
   * @param {String} accountId The ID associated with the given account.
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
  
  /**
   * Retrieve the recent transactions for an account.
   *
   * @param {String} accountId The ID associated with the given account.
   * @param {Number} limit Limit to a number of transactions, default 5.
   * @return {Promise}
   */
  getTransactions(accountId, limit) {
    return new Promise((resolve, reject) => {
      let query = { 'account_id': accountId, 'limit': limit || 5 };
      this.request({ url: '/transactions', qs: query }, (err, res) => {
        if (error) {
          return reject(err);
        }
        if (res.statusCode !== 200) {
          return reject(res.body);
        }
        return resolve(res.body.transactions);
      });
    });
  }
}

module.exports = Monzo;
