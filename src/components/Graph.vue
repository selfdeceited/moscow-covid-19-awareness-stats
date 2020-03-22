<template>
  <div>
    <div>
    <graph-line-dateblock
            :width="900"
            :height="550"
            :axis-min="0"
            :axis-max="2000"
            :axis-reverse="false"
            :axis-format="'dd.MM'"
            :axis-interval="1000 * 60 * 60 * 24"
            :labels="labels"
            :values="values">
        <note>note</note>
        <legends :names="names"></legends>
        <tooltip :names="names" :position="'right'"></tooltip>
        <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
    </graph-line-dateblock>
    </div>
  </div>
</template>

<script>

import realData from '../services/stats';
import { getRegressionBasedOnData, formatDataByRegression, getExtendedPredictions } from '../services/calculateStats';

const virusAverageAdjustmentDays = 7;
const predictOnDays = 7;

const regressionData = getRegressionBasedOnData(realData);
const interpolated = formatDataByRegression(realData, regressionData);
const futureData = getExtendedPredictions(realData, regressionData, predictOnDays);
const dataWithPredictions = interpolated.concat(futureData);

/*
  take data from now, consider it an up-to-date data for `virusAverageAdjustmentDays` ago
  since detected cases only shown that person got sick N days ago.
*/

const undetected = interpolated.map((x, i) => {
  const undetectedData = dataWithPredictions[i + virusAverageAdjustmentDays];
  const totalNumber = undetectedData ? undetectedData.number : 0;
  return { date: x.date, number: totalNumber };
});

export default {
  name: 'Graph',
  props: { },
  data() {
    return {
      labels: realData.map((x) => x.date),
      values: [
        realData.map((x) => x.number),
        interpolated.map((x) => x.number),
        undetected.map((x) => x.number),
      ],
      names: ['documented', 'documented after regression calc', 'predictions on currently sick people'],
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
</style>
