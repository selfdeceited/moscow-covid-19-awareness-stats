/* eslint-disable linebreak-style */

import regression from 'regression';

const getLastDate = (data) => {
  const filtered = data.filter((x) => x.number !== 0);
  return filtered[filtered.length - 1].date;
};

const getRegressionBasedOnData = (data) => {
  const dataMappedForRegression = data
    .map((x, i) => [i, x.number])
    .filter((_) => _[1] !== 0); // future stats are omitted
  const regressionData = regression.exponential(dataMappedForRegression);
  return regressionData;
};

const getPredictions = (regressionData, points, length) => {
  let lastNumber = points[points.length - 1][0];
  const futureData = [];
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < length; j++) {
    lastNumber += 1;
    const newNumber = regressionData.predict(lastNumber);
    futureData.push(newNumber);
  }
  return futureData;
};

const formatDataByRegression = (data, regressionData) => {
  let regressionPoints = regressionData.points;
  if (data.length > regressionData.points.length) {
    const predictOnDays = data.length - regressionData.points.length;
    const predictions = getPredictions(regressionData, regressionPoints, predictOnDays);
    regressionPoints = regressionPoints.concat(predictions);
  }

  const graphData = data.map((x, i) => ({
    date: x.date,
    number: regressionPoints[i][1],
  }));

  return { graphData, regressionPoints };
};

const getExtendedPredictions = (data, regressionData, regressionPoints, predictOnDays) => {
  let lastDate = new Date(data[data.length - 1].date.getTime());
  const futureData = getPredictions(regressionData, regressionPoints, predictOnDays);
  const extendedPredictions = [...Array(predictOnDays).keys()].map((x, i) => {
    lastDate = new Date(lastDate.getTime());
    const onDate = new Date(lastDate.setDate(lastDate.getDate() + 1));
    return {
      date: onDate,
      number: futureData[i][1],
    };
  });

  return extendedPredictions;
};

// eslint-disable-next-line import/prefer-default-export
export {
  getLastDate, getRegressionBasedOnData, formatDataByRegression, getExtendedPredictions,
};
