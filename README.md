[![CircleCI](https://circleci.com/gh/astronomer-integrations/analytics.js-integration-pebble-post.svg?style=svg)](https://circleci.com/gh/astronomer-integrations/analytics.js-integration-pebble-post)

![alt text](https://s15.postimg.org/j9e06qlqj/pebblepost_logo.png "PebblePost analytics integration")
# An analytics.js integration for [PebblePost](http://www.pebblepost.com/), by [Astronomer](http://www.astronomer.io/)

This integration allows you to easily send customer data to PebblePost.

Available API methods: 
* Page
* Identify
* Track

Please see our [guide to using these methods here](http://docs.astronomer.io/docs/event-type-guide).  

## Getting Credentials from PebblePost:

You can obtain your Site ID from your PebblePost account manager.  Don't have an account?  [Sign up here](http://www.pebblepost.com/).

## Set Up the PebblePost Configuration in your Astronomer App:

When you set up your PebblePost Configuration, you'll see the following required or optional inputs:

![alt text](https://s19.postimg.org/zg2cmipw3/Pebble_Post_Config.png "PebblePost Configuration in Astronomer")

Site ID (required)(text field)
Paste your Site ID from PebblePost here.

endUrl (optional)(key/value pair, text fields)
To override the URL of a page being viewed by a user with any URL scheme, provide a key/value pair for mapped tracking.  For example, to override a page to match against your happy customers segment, you can set the mapping like this:

You can implement this mapping in your website like so:

![alt text](https://s19.postimg.org/5csvrosyb/Screen_Shot_2016_10_18_at_9_21_10_AM.png "PebblePost endURL implementation")

## Turn on PebblePost!
Once you've submitted your desired configuration, choose "Save & Close", and then toggle your integration on.  From here, we'll build your new configuration on our servers (this can take between 5 - 15 minutes).

## Track your events!
The `Page` API will be called automatically and asynchronously add the PebblePost tracking script to your website.  If you provided an optional `endUrl`, you can track the event like so:

```
analytics.track('Happy Customer');
```

Your mapped synthetic endpoint will be sent to PebblePost to override any existing endpoints.  This can be verified in the developer console in your browser by viewing your `window._pp.endUrl` element, which in this case would yield `window._pp.endUrl: "/endpoint/customer"`

## License

Released under the [MIT license](License.md).
