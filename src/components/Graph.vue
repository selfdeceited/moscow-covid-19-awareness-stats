<template>
  <div>
    <div class="covid-graph">
      <apexchart width="100%" type="line"
        :options="chartOptions"
        :series="series">
      </apexchart>
    </div>
  </div>
</template>

<script>

import realData from '../services/stats';
import {
  getRegressionBasedOnData, formatDataByRegression, getExtendedPredictions, getLastDate,
} from '../services/calculateStats';

const virusAverageAdjustmentDays = 7;
const predictOnDays = 7;

const regressionData = getRegressionBasedOnData(realData);
const interpolated = formatDataByRegression(realData, regressionData);
// eslint-disable-next-line max-len
const futureData = getExtendedPredictions(realData, regressionData, interpolated.regressionPoints, predictOnDays);
const dataWithPredictions = interpolated.graphData.concat(futureData);

const lastDate = getLastDate(realData);

/*
  take data from now, consider it an up-to-date data for `virusAverageAdjustmentDays` ago
  since detected cases only shown that person got sick N days ago.
*/

const undetected = interpolated.graphData.map((x, i) => {
  const undetectedData = dataWithPredictions[i + virusAverageAdjustmentDays];
  const totalNumber = undetectedData ? undetectedData.number : 0;
  return { date: x.date, number: totalNumber };
});

export default {
  name: 'Graph',
  props: { },
  data() {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2',
        },
        annotations: {
          xaxis: [{
            x: lastDate.getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Latest data available',
            },
          }],
        },
        xaxis: {
          type: 'datetime',
        },
        dataLabels: {
          enabled: false,
        },
        labels: realData.map((x) => x.date.getTime()),
        stroke: {
          curve: 'straight',
        },
        grid: {
          padding: {
            right: 30,
            left: 20,
          },
        },
      },
      series: [{
        name: 'documented',
        data: realData.map((x) => x.number),
      },
      {
        name: 'documented - after interpolation',
        data: interpolated.graphData.map((x) => x.number),
      },
      {
        name: 'predictions on currently sick people',
        data: undetected.map((x) => x.number),
      }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.covid-graph {
  width: 80%;
  margin: 0 auto;
  padding: 0;
}
@media screen and (max-width: 980px) {
  .covid-graph {
    width: 95%;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
