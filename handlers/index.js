'use strict';

module.exports = (monzo) => {
  return {
    'LaunchRequest': require('./launch'),
    'BalanceIntent': require('./balance')(monzo),
    'Unhandled': require('./unhandled'),
  };  
};

