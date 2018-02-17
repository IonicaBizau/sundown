"use strict";

const sundown = require("../lib");

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
