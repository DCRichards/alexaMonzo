'use strict';

const log = require('npmlog');
const TAG = 'handler';

module.exports = (monzo) => {
  return function() {
    return monzo.getAccounts()
      .then((accounts) => {
        if (!accounts[0]) {
          return Promise.reject('No accounts found');
        }
        return monzo.getBalance(accounts[0].id);
      })
      .then((balance) => {
        let amount = parseInt(balance.balance/100);
        let spent = parseInt((balance.spend_today*-1)/100);
        this.emit(':tell', `Your balance is ${amount} pounds, you spent ${spent} pounds today.`);
      })
      .catch((error) => {
        log.error(TAG, 'Error: %j', error);
        this.emit(':tell', 'Sorry, I can\'t get your balance right now');
      });
  };
};
