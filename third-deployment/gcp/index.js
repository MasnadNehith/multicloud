'use strict';
const {calculator} = require('multicloudcalculator');

exports.http = async (request, response) => {
  const bodyInformation = JSON.parse(request.body);
  const name = bodyInformation.name;
  const first = bodyInformation.first;
  const second = bodyInformation.second;
  try{
    const result = calculator(name,first,second);
    return response.status(200).send(JSON.stringify(result));
  }catch(err){
    return response.status(200).send(JSON.stringify(err));
  }
};



