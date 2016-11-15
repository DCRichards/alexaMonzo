'use strict';

module.exports = (monzo) => {
  return {
    'LaunchRequest': require('./launch'),
    'BalanceIntent': require('./balance')(monzo),
    'LastTransactionIntent': require('./lastTransaction')(monzo),
    'Unhandled': require('./unhandled'),
  };
};
