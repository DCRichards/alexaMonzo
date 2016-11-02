'use strict';

var log = require('npmlog');

module.exports = function(monzo) {
  return {
    'LaunchRequest': function () {
        this.emit('BalanceIntent');
    },
    'BalanceIntent': function() {
      var self = this;
      return monzo.getAccounts()
        .then(function(accounts) {
          return monzo.getBalance(accounts[0].id);
        })
        .then(function(balance) {
          var amount = parseInt(balance.balance/100);
          var spent = parseInt((balance.spend_today*-1)/100);
          self.emit(':tell', 'Your balance is ' + amount + ' pounds, you spent ' + spent + ' pounds today.');
        })
        .catch(function(error) {
          self.emit(':tell', 'Sorry, I can\'t get your balance right now');
        });
    },
    'Unhandled': function() {
      this.emit(':tell', 'Sorry, I don\'t understand');
    }
  };
};
