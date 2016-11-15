'use strict';

const log = require('npmlog');
const TAG = 'lastTransaction';

module.exports = (monzo) => {
  return function() {
    return monzo.getAccounts()
      .then((accounts) => {
        if (!accounts[0]) {
          return Promise.reject('No accounts found');
        }
        return monzo.getTransactions(accounts[0].id, 1);
      })
      .then((transaction) => {
        let spend = parseInt((transaction.amount*-1)/100);
        this.emit(':tell', `Your last transaction was ${spend} pounds`);
      })
      .catch((error) => {
        log.error(TAG, 'Error: %j', error);
        this.emit(':tell', 'Sorry, I couldn\'t get your last transaction');
      });
  };
};
