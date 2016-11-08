'use strict';

const config = require('./config');

class Monzo {
  
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.request = require('./request').defaults({
      baseUrl: config.monzo.url,
      method: 'GET',
      json: true,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }

  getAccounts() {
    return new Promise((resolve, reject) => {
      this.request('/accounts', (error, res, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(body.accounts);
      });
    });
  }
  
  getBalance(accountId) {
    return new Promise((resolve, reject) => {
      let query = { 'account_id': accountId };
      this.request({ url: '/balance', qs: query }, (error, res, body) => {
        if (error) {
          return reject(error);
        }
        return resolve(body);
      });
    });
  }
}

module.exports = Monzo;

