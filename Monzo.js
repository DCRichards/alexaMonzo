'use strict';

const request = require('request');
const config = require('./config');

class Monzo {
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

  getAccounts() {
    return new Promise((resolve, reject) => {
      this.request('/accounts', (error, res) => {
        if (error) {
          return reject(error);
        }
        return resolve(res.body.accounts);
      });
    });
  }
  
  getBalance(accountId) {
    return new Promise((resolve, reject) => {
      let query = { 'account_id': accountId };
      this.request({ url: '/balance', qs: query }, (error, res) => {
        if (error) {
          return reject(error);
        }
        return resolve(res.body);
      });
    });
  }
}

module.exports = Monzo;
