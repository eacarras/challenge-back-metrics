const Utils = require('../../utils');
const ErrorClass = require('../../classes/error');

/**
 * 
 * @param {*} type 
 * @returns [Object]
 */
const getMetricsByType = (type="day") => new Promise((resolve, reject) => {
  let data;
  if (process.env.NODE_ENV !== 'production') {
    try {
      data = Utils.parserDataTestMode(type);
    } catch (e) {
      return reject(new ErrorClass({
        statusCode: 500,
        message: e.message,
        track: 'Parser metrics in the initial of the file getMetricsByType.js',
      }));
    }
  }

  if (!data) {
    return reject(new ErrorClass({
      statusCode: 403,
      message: 'No data found to get the metrics',
      track: 'No data parser in the file getMetricsByType.js',
    }));
  }
  
  try {
    const finalParserData = {};
    resolve(data);
  } catch (e) {
    return reject(new ErrorClass({
      statusCode: 500,
      message: e.message,
      track: 'No data parser in the file getMetricsByType.js',
    }));
  }
});

module.exports = getMetricsByType;
