/* eslint-disable linebreak-style */

import regression from 'regression';

const getRegressionBasedOnData = (data) => {
  const dataMappedForRegression = data.map((x, i) => [i, x.number]);
  const regressionData = regression.exponential(dataMappedForRegression);
  return regressionData;
};

const formatDataByRegression = (data, regressionData) => data.map((x, i) => ({
  date: x.date,
  number: regressionData.points[i][1],
}));

const getExtendedPredictions = (data, regressionData, predictOnDays) => {
  const lastDate = new Date(data[data.length - 1].date.getTime());
  let lastNumber = regressionData.points[regressionData.points.length - 1][0];
  const futureData = [];
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < predictOnDays; j++) {
    lastNumber += 1;
    const newNumber = regressionData.predict(lastNumber);
    futureData.push(newNumber);
  }

  const extendedPredictions = [...Array(predictOnDays).keys()].map((x, i) => {
    const onDate = lastDate.setDate(lastDate.getDate() + i + 1);
    return {
      date: onDate,
      number: futureData[i][1],
    };
  });

  return extendedPredictions;
};

// eslint-disable-next-line import/prefer-default-export
export { getRegressionBasedOnData, formatDataByRegression, getExtendedPredictions };
