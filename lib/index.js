'use strict';

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Pebble Post`.
 */
var PebblePost = module.exports = integration('Pebble Post');

/**
 * Initialize.
 *
 * @api public
 */

PebblePost.prototype.initialize = function() {
  window._pp = window._pp || [];
  this.ready();
};

/**
 * Loaded.
 *
 * @api private
 * @return {boolean}
 */

PebblePost.prototype.loaded = function() {
  return !!(document.body && window._pp);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */
PebblePost.prototype.page = function() {
};

PebblePost.prototype.track = function(track) {
};
