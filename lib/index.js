'use strict'; 

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Pebble Post`.
 */

var PebblePost = module.exports = integration('Pebble Post')
.mapping('endUrl')
.option('siteId', '')
.global('_pp');

/**
 * Initialize.
 *
 * @api public
 */

PebblePost.prototype.initialize = function() {
  window._pp = window._pp || {};
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

PebblePost.prototype.page = function(page) {
  var user = this.analytics.user() || {};
  var siteId = this.options.siteId;
  var properties = page.properties() || {};

  this.addPebblePostParams(siteId, properties, user);
  this._fireScript();
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

PebblePost.prototype.track = function(track) { 
  var user = this.analytics.user() || {};
  var siteId = this.options.siteId;
  var properties = track.properties() || {};
  // user can specify and endUrl mapping in the config
  var endUrl = this.endUrl(track.event())[0];

  this.addPebblePostParams(siteId, properties, user, endUrl);
  this._fireScript();
};

/**
 * _fireScript.
 * Adds the script tag to the page from pebble post and initiates the tracking according to their docs.
 *
 * @api public
 */

PebblePost.prototype._fireScript = function() {
  var ppjs = document.createElement('script');
  ppjs.type = 'text/javascript';
  ppjs.async = true;
  var protocol = document.location.protocol === 'https:' ? 'https:' : 'http:';
  ppjs.src = protocol + '//cdn.pbbl.co/r/' + window._pp.siteId + '.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ppjs, s);
};

PebblePost.prototype.addPebblePostParams = function(siteId, properties, user, endUrl) {
  window._pp.siteUId = user.id() || user.traits().username || this.userId() || '';
  window._pp.siteId = siteId;
  window._pp.email = user.traits().email || '';
  window._pp.orderValue = properties.orderValue || properties.value || properties.revenue || '';
  window._pp.orderId = properties.order_id || '';
  window._pp.tags = properties.tags || '';
  window._pp.endUrl = endUrl || properties.endUrl || '';
};
