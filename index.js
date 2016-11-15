'use strict';

const Alexa = require('alexa-sdk');
const log = require('npmlog');
const Monzo = require('./Monzo');
const TAG = 'index';

exports.handler = (event, context, callback) => {
  let alexa = Alexa.handler(event, context);
  let monzo = new Monzo(event.session.user.accessToken);
  alexa.resources = require('./languages');
  alexa.registerHandlers(require('./handlers')(monzo));
  log.info(TAG, 'Handler called');
  alexa.execute();
};
