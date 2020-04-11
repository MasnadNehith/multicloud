'use strict';
const {get, create} = require('multicloud-blog-api');
const url = process.env.MONGODB;

module.exports.status = async event => {
  return { 
    statusCode: 200, 
    body: JSON.stringify('Status all good'),
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    }
  };
};

module.exports.get = async event => {
  const result = await get(url);
  const item = {
    result : result,
    dataFrom : 'AWS'
  }
  return { 
    statusCode: 200, 
    body: JSON.stringify(item),
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    }
  };
};

module.exports.create = async event => {
  const bodyInfo = JSON.parse(event.body);
  const result = await create(bodyInfo.header, bodyInfo.text, url);
  return { 
    statusCode: 200,
     body: JSON.stringify(result),
     headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : true
    }
    };
};
