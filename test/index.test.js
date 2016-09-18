'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integration = require('@segment/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var PebblePost = require('../lib/');

describe('PebblePost', function() {
  var analytics;
  var pebblePost;
  var options = {
  };

  beforeEach(function() {
    analytics = new Analytics();
    pebblePost = new PebblePost(options);
    analytics.use(PebblePost);
    analytics.use(tester);
    analytics.add(pebblePost);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    pebblePost.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    analytics.compare(PebblePost, integration('Pebble Post'));
  });

  describe('loading', function() {
    it('should load', function(done) {
      analytics.load(pebblePost, done);
    });
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.once('ready', done);
      analytics.initialize();
    });

    describe('#page', function() {
      // beforeEach(function() {
      // });

      it('should call page', function() {
      });
    });

    describe('#track', function() {
      beforeEach(function() {
      });

      it('should call track', function() {
      });
    });
  });
});
