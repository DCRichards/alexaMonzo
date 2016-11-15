'use strict';

module.exports = () => {
  return () => {
    this.emit('BalanceIntent');
  };
};
