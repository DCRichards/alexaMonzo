'use strict';

const Alexa = require('alexa-sdk');
const Monzo = require('./Monzo');

exports.handler = (event, context, callback) => {
  let alexa = Alexa.handler(event, context);
  let monzo = new Monzo(event.session.user.accessToken);
  alexa.resources = require('./languages');
  alexa.registerHandlers(require('./handlers')(monzo));
  alexa.execute();
};

