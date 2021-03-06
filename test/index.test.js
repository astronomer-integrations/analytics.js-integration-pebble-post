'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integration = require('@segment/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var tester = require('@segment/analytics.js-integration-tester');
var PebblePost = require('../lib/');

var expectedPp = {
  siteUId: '1234',
  siteId: 'mySiteId',
  email: 'alois@astronomer.io',
  orderValue: '100',
  orderId: 'orderId',
  tags: 'VIP',
  endUrl: 'hello'
};

describe('PebblePost', function() {
  var analytics;
  var pebblePost;
  var options = {
    siteId: 'mySiteId',
    endUrl: {
      'Email Sign Up': 'hello'
    }
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
    analytics.compare(PebblePost, integration('Pebble Post')
                      .mapping('endUrl')
                      .option('siteId', '')
                      .global('_pp'));
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
      beforeEach(function() {
        analytics.stub(pebblePost, '_fireScript');
        analytics.stub(pebblePost, 'addPebblePostParams');
      });

      it('should call page', function() {
        analytics.page();
        analytics.called(pebblePost._fireScript);
        analytics.called(pebblePost.addPebblePostParams);
      });
    });

    describe('#track', function() {
      beforeEach(function() {
        analytics.stub(pebblePost, '_fireScript');
        analytics.spy(pebblePost, 'addPebblePostParams');
        analytics.identify('1234', {
          'name': 'Craig Barreras',
          'email': 'alois@astronomer.io',
          'username': 'craig-barreras-3796725103',
          'role': 'buyer',
          'segment': 7,
          'region': 11
        });
      });

      it('should call track', function() {
        analytics.track('Email Sign Up', { order_id: 'orderId', value: '100', tags: 'VIP' });
        analytics.deepEqual(window._pp, expectedPp);
        analytics.called(pebblePost._fireScript);
        analytics.called(pebblePost.addPebblePostParams);
      });
    });

    describe('fire script', function() { 
      it('should insert script tag', function() {
        var scriptCount = document.getElementsByTagName('script').length;
        pebblePost._fireScript();
        var newScriptCount = document.getElementsByTagName('script').length;
        analytics.equal(scriptCount + 1, newScriptCount);
      });
    });
  });
});
