'use strict';

module.exports = () => {
  return function() {
    this.emit('BalanceIntent');
  };
};
