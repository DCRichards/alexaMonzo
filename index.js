'use strict';

var Alexa = require('alexa-sdk');
var log = require('npmlog');
var Monzo = require('./Monzo');

exports.handler = function(event, context, callback) {
   var alexa = Alexa.handler(event, context);
   var monzo = new Monzo(event.session.user.accessToken);
   alexa.resources = require('./languages');
   alexa.registerHandlers(require('./handlers')(monzo));
   alexa.execute();
};
