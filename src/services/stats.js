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
  { date: new Date(Date.parse('03.07.2019')), number: 5 },
  { date: new Date(Date.parse('03.08.2019')), number: 5 },
  { date: new Date(Date.parse('03.09.2019')), number: 5 },
  { date: new Date(Date.parse('03.10.2019')), number: 8 },
  { date: new Date(Date.parse('03.11.2019')), number: 11 },
  { date: new Date(Date.parse('03.12.2019')), number: 17 },
  { date: new Date(Date.parse('03.13.2019')), number: 26 },
  { date: new Date(Date.parse('03.14.2019')), number: 35 },
  { date: new Date(Date.parse('03.15.2019')), number: 35 },
  { date: new Date(Date.parse('03.16.2019')), number: 53 },
  { date: new Date(Date.parse('03.17.2019')), number: 55 },
  { date: new Date(Date.parse('03.18.2019')), number: 86 },
  { date: new Date(Date.parse('03.19.2019')), number: 98 },
  { date: new Date(Date.parse('03.20.2019')), number: 131 },
  { date: new Date(Date.parse('03.21.2019')), number: 137 },
  // no new data by now
  { date: new Date(Date.parse('03.22.2019')), number: 0 },
  { date: new Date(Date.parse('03.23.2019')), number: 0 },
  { date: new Date(Date.parse('03.24.2019')), number: 0 },
  { date: new Date(Date.parse('03.25.2019')), number: 0 },
  { date: new Date(Date.parse('03.26.2019')), number: 0 },
  { date: new Date(Date.parse('03.27.2019')), number: 0 },
  { date: new Date(Date.parse('03.28.2019')), number: 0 },
  { date: new Date(Date.parse('03.29.2019')), number: 0 },
  { date: new Date(Date.parse('03.30.2019')), number: 0 },
  { date: new Date(Date.parse('03.31.2019')), number: 0 },
];

export default moscowDataFor2Weeks;
