/* eslint-disable linebreak-style */


/*
 data from: https://yandex.by/web-maps/covid19?ll=41.775580%2C54.894027&z=3
 fetched by query on JS side while I cannot find the API.
 ```
  const selector = ".covid-histogram-view__bar-value"
  Array.prototype.slice.call(document.querySelectorAll(selector)).map(x => x.innerText)
 ```
 */

const moscowDataFor2Weeks = [
  { date: new Date(Date.parse('03.06.2019')), number: 5 },
  { date: new Date(Date.parse('03.07.2019')), number: 5 },
  { date: new Date(Date.parse('03.08.2019')), number: 5 },
  { date: new Date(Date.parse('03.09.2019')), number: 8 },
  { date: new Date(Date.parse('03.10.2019')), number: 11 },
  { date: new Date(Date.parse('03.11.2019')), number: 17 },
  { date: new Date(Date.parse('03.12.2019')), number: 26 },
  { date: new Date(Date.parse('03.13.2019')), number: 35 },
  { date: new Date(Date.parse('03.14.2019')), number: 35 },
  { date: new Date(Date.parse('03.15.2019')), number: 53 },
  { date: new Date(Date.parse('03.16.2019')), number: 55 },
  { date: new Date(Date.parse('03.17.2019')), number: 86 },
  { date: new Date(Date.parse('03.18.2019')), number: 98 },
  { date: new Date(Date.parse('03.19.2019')), number: 131 },
  { date: new Date(Date.parse('03.20.2019')), number: 137 },
];

export default moscowDataFor2Weeks;
