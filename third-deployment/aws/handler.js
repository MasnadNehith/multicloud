'use strict';
const {calculator} = require('multicloudcalculator');

module.exports.calculate = async event => {
  const bodyInformation = JSON.parse(event.body);
  const name = bodyInformation.name;
  const first = parseInt(bodyInformation.first);
  const second = parseInt(bodyInformation.second);
  try{
    const result = calculator(name, first, second);
    return {statusCode: 200, body: JSON.stringify(result)};
  }catch(err){
    console.log(err);
    return {statusCode: 500, body: JSON.stringify(err)};
  }
};
