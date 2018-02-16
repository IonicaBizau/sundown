"use strict";

const sundown = require("../lib");

// Sunset today in Cluj-Napoca, Romania
const sundownInCluj = sundown(new Date(), 46.7712, 23.6236)

console.log(sundownInCluj)
// { sunrise:
//    { raw_time: [ 7, 28 ],
//      angle: 107.2538519580407,
//      time: '07:28',
//      formatted: '7,28, az = 107.2538519580407°' },
//   sunset:
//    { raw_time: [ 17, 52 ],
//      angle: 252.97122667715888,
//      time: '07:28',
//      formatted: '17,52, az = 252.97122667715888°' },
//   date: 2018-02-16T10:13:25.415Z,
//   coordinates: [ 46.7712, 0.06562111111111112 ] }
