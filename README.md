<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# sundown

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/sundown.svg)](https://www.npmjs.com/package/sundown) [![Downloads](https://img.shields.io/npm/dt/sundown.svg)](https://www.npmjs.com/package/sundown)

> Calculate sunrise and sunset times for a given date and location.

## :cloud: Installation

```sh
# Using npm
npm install --save sundown

# Using yarn
yarn add sundown
```


## :clipboard: Example



```js
const sundown = require("sundown");

// Sunset today in Cluj-Napoca, Romania
const sundownInCluj = sundown(new Date(), 46.7712, 23.6236)

console.log(sundownInCluj)
// { sunrise:
//    { raw_time: [ 7, 27 ],
//      angle: 106.73357573114593,
//      time: '07:27',
//      formatted: '7:27, az = 106.73357573114593°' },
//   sunset:
//    { raw_time: [ 17, 53 ],
//      angle: 253.492509740339,
//      time: '17:53',
//      formatted: '17:53, az = 253.492509740339°' },
//   date: 2018-02-17T18:15:08.339Z,
//   coordinates: [ 46.7712, 0.06562111111111112 ] }
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


### `sundown(d, lat, lon)`
Calculate sunset and sunrise times for given date and coordinates.

#### Params

- **Date** `d`: The date you want to find the sun data for.
- **Number** `lat`: The latitude.
- **Number** `lon`: The longitude.

#### Return
- **Object** An object containing:
   - `sunrise` (Object):
     - `raw_time` (Array): An array of two numbers (hours and minutes)
     - `time` (String): Formatted sunrise time (`HH:mm`)
   - `sunset` (Object):
     - `raw_time` (Array): An array of two numbers (hours and minutes)
     - `time` (String): Formatted sunset time (`HH:mm`)
   - `date` (Date): The provided date.
   - `coordinates` (Array): An array of latitude and longitude values.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`sunset-app-bloggify`](https://github.com/Bloggify/sunset#readme) (by Bloggify)—Get sunset times.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2018#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
