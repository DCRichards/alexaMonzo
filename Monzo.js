'use strict';

var request = require('request');
var Promise = require('bluebird');
var config = require('./config');

module.exports = function(apiKey) {
  var self = this;
  this.apiKey = apiKey;
  
  this.getAccounts = function() {
    return new Promise(function(resolve, reject) {
      request({
        baseUrl: config.monzo.url,
        method: 'GET',
        json: true,
        url: '/accounts',
        headers: {
          'Authorization': 'Bearer ' + self.apiKey
        }
      }, function(error, response) {
          if (error) {
            return reject(error);
          }
          return resolve(response.body.accounts);
      });
    });
  };
  
  this.getBalance = function(accountId) {
    return new Promise(function(resolve, reject) {
      request({
        baseUrl: config.monzo.url,
        method: 'GET',
        json: true,
        url: '/balance?account_id='+accountId,
        headers: {
          'Authorization': 'Bearer ' + self.apiKey
        }
      }, function(error, response) {
          if (error) {
            return reject(error);
          }
          return resolve(response.body);
      });
    });
  };
};
