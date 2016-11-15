'use strict';

module.exports = () => {
  return () => {
    this.emit(':tell', 'Sorry, I don\'t understand');
  };
};
