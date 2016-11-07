'use strict';

const request = require('request');
const config = require('./config');

module.exports = (apiKey) => {
  this.apiKey = apiKey;
  
  this.getAccounts = () => {
    return new Promise((resolve, reject) => {
      request({
        baseUrl: config.monzo.url,
        method: 'GET',
        json: true,
        url: '/accounts',
        headers: {
          'Authorization': 'Bearer ' + this.apiKey
        }
      }, (error, response) => {
          if (error) {
            return reject(error);
          }
          return resolve(response.body.accounts);
      });
    });
  };
  
  this.getBalance = (accountId) => {
    return new Promise((resolve, reject) => {
      request({
        baseUrl: config.monzo.url,
        method: 'GET',
        json: true,
        url: '/balance?account_id='+accountId,
        headers: {
          'Authorization': 'Bearer ' + this.apiKey
        }
      }, (error, response) => {
          if (error) {
            return reject(error);
          }
          return resolve(response.body);
      });
    });
  };
};

