[![CircleCI](https://circleci.com/gh/astronomer-integrations/analytics.js-integration-pebble-post.svg?style=svg)](https://circleci.com/gh/astronomer-integrations/analytics.js-integration-pebble-post)

![alt text](https://s15.postimg.org/j9e06qlqj/pebblepost_logo.png "PebblePost analytics integration")
# An analytics.js integration for [PebblePost](http://www.pebblepost.com/), by [Astronomer](http://www.astronomer.io/)

This integration allows you to easily send customer data to PebblePost (a digital direct mail platform). 

Available Analytics.js methods for this integration: 
* Page
* Track

Please see our [guide to using the Analytics.js methods here](http://docs.astronomer.io/docs/event-type-guide).  

## Getting Credentials from PebblePost:

You can obtain your Site ID from your PebblePost account manager.  Don't have an account?  [Sign up here](http://www.pebblepost.com/).

## How to Implement the PebblePost Analytics.js Integration within Astronomer:

When you set up your PebblePost analytics.js integration within Astronomer, you'll see the following required or optional inputs:

![alt text](https://s19.postimg.org/zg2cmipw3/Pebble_Post_Config.png "PebblePost Configuration in Astronomer")

Site ID (required)(text field)
Paste your Site ID from PebblePost here.

endUrl (optional)(key/value pair, text fields)
To override the URL of a page being viewed by a user with any URL scheme, provide a key/value pair for mapped tracking.  For example, to override a page to match against your happy customers segment, you can set the mapping like this:

## Turn on PebblePost!
Once you've submitted your desired configuration, choose "Save & Close", and then toggle your integration on.  From here, we'll build your new configuration on our servers (this can take between 5 - 15 minutes).

## You're Ready to Call Methods!
Please see our [guide to using the Analytics.js methods here](http://docs.astronomer.io/docs/event-type-guide). 

# Open-Source at Astronomer

One of our core values at Astronomer is "openness." We see this manifest in our dedication to open-source. We are relentless to **only invent what we must invent**; to use and contribute to the large and growing body of open-source software that countless developers have selflessly contributed to the world.

And it's not just about receiving value. Open-source is a two-way street. A core element of our business strategy is to open-source the [Aries Framework](github.com/aries-data), with the goal to reduce the amount of time developers waste re-writing integrations.

We also have many open-source projects in [our main Github organization](https://github.com/astronomerio).

## Special Notice re: Analytics.js and Segment

Early on, in order to get clickstream data collection capability quickly within our platform, and after a conversation with Peter Reinhart (an early Analytics.js contributor and CEO of Segment), we decided to adopt Analytics.js to support it as a standard for clickstream data collection. As Segment has built a successful commercial venture around the core library, they've open-sourced a number of supporting plugins and SDKs that we've also adopted.

Clickstream is one part of Astronomer, and an important one to our early customers. We publicly thank Segment for their open-source contributions, it made it easier to stand up that part of our platform. In appreciation and in the spirit of our cooperation, we open-source all of our Analytics.js-related code, contributing back to a growing ecosystem.

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|

The MIT License (MIT)

Copyright (c) 2016 Astronomer, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
