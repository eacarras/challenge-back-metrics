const fs = require('fs');
const path = require('path');

class Utils {
  
  /**
   * parserDataTestMode
   */
  static parserDataTestMode(type) {
    const fileName = type === 'day'
      ? 'demoPumpDayData.csv'
      : 'demoCompressorWeekData.csv';
    
    const fileData = fs.readFileSync(path.join(__dirname, `../testData/${fileName}`), {encoding:'utf8', flag:'r'});
    const parserInformation = fileData.toString().split(/\r?\n/);
    parserInformation.splice(0,1)
    
    const information = parserInformation.map(line => line.replace(',',';').replace(',',';').replace(',',';'));

    let notData = 0;
    const finalInformation = information.map(data => {
      const dataSplitted = data.split(';');

      
      try {
        const preDataCleaned = dataSplitted[3].replace(/\"\"/g, '"')
        const dataCleaned =  preDataCleaned.slice(1, preDataCleaned.length - 1);

        dataSplitted[3] = JSON.parse(dataCleaned);
      } catch(e) {
        console.log(e);
        dataSplitted[3] = {};
        notData += 1;
      }

      return dataSplitted;
    });

    if (notData) {
      console.info('THERE ARE MULTIPLE VALUES WITH NOT DATA', notData);
    }
    return finalInformation;
  }

  /**
   * transformDataToInformation
   */
  static transformDataToInformation(data) {
    return data.reduce((acc, info) => {
      if (!info[0]) {
        return acc;
      }
      // info[3] => JSON
      acc[info[0]] = {
        averageConsumpsition: 254729,
        averageInactivity: "12:20",
        averageActivity: "12:30",
      }

      return acc;
    }, {});
  }
}

module.exports = Utils;
