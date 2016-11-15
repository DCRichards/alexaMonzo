'use strict';

module.exports = () => {
  return function() {
    this.emit(':tell', 'Sorry, I don\'t understand');
  };
};
