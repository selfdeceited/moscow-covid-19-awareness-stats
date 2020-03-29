/* eslint-disable linebreak-style */

/*
 While I cannot find official APIs for Moscow specifically, there's a hack by now:
 https://yandex.by/web-maps/covid19?ll=41.775580%2C54.894027&z=3
 1. Click on 'Moscow'
 2. Open console
 3. Ctrl+V
 ```
  const selector = ".covid-histogram-view__bar-value"
  Array.prototype.slice.call(document.querySelectorAll(selector)).map(x => x.innerText)
 ```
 4. Paste it here
 */

const moscowDataFor2Weeks = [
  { date: new Date(Date.parse('2020-03-06')), number: 5 },
  { date: new Date(Date.parse('2020-03-07')), number: 5 },
  { date: new Date(Date.parse('2020-03-08')), number: 5 },
  { date: new Date(Date.parse('2020-03-09')), number: 8 },
  { date: new Date(Date.parse('2020-03-10')), number: 11 },
  { date: new Date(Date.parse('2020-03-11')), number: 17 },
  { date: new Date(Date.parse('2020-03-12')), number: 26 },
  { date: new Date(Date.parse('2020-03-13')), number: 35 },
  { date: new Date(Date.parse('2020-03-14')), number: 35 },
  { date: new Date(Date.parse('2020-03-15')), number: 53 },
  { date: new Date(Date.parse('2020-03-16')), number: 55 },
  { date: new Date(Date.parse('2020-03-17')), number: 86 },
  { date: new Date(Date.parse('2020-03-18')), number: 98 },
  { date: new Date(Date.parse('2020-03-19')), number: 131 },
  { date: new Date(Date.parse('2020-03-20')), number: 137 },
  { date: new Date(Date.parse('2020-03-21')), number: 191 },
  { date: new Date(Date.parse('2020-03-22')), number: 262 },
  { date: new Date(Date.parse('2020-03-23')), number: 290 },
  { date: new Date(Date.parse('2020-03-24')), number: 410 },
  { date: new Date(Date.parse('2020-03-25')), number: 546 },
  { date: new Date(Date.parse('2020-03-26')), number: 703 },
  { date: new Date(Date.parse('2020-03-27')), number: 817 },
  // no new data by now
  { date: new Date(Date.parse('2020-03-28')), number: 0 },
  { date: new Date(Date.parse('2020-03-29')), number: 0 },
  { date: new Date(Date.parse('2020-03-30')), number: 0 },
  { date: new Date(Date.parse('2020-03-31')), number: 0 },
  { date: new Date(Date.parse('2020-04-01')), number: 0 },
  { date: new Date(Date.parse('2020-04-02')), number: 0 },
  { date: new Date(Date.parse('2020-04-03')), number: 0 },
];

export default moscowDataFor2Weeks;
