'use strict';
const {calculator} = require('multicloudcalculator');

module.exports.calculate = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const bodyInformation = req.body;
  const name = bodyInformation.name;
  const first = parseInt(bodyInformation.first);
  const second = parseInt(bodyInformation.second);
  try{
    const result = calculator(name,first,second);
    return context.res  = {body: JSON.stringify(result)};
  }catch(err){
    return context.res = {status : 500, body: JSON.stringify(err)};
  }
};

