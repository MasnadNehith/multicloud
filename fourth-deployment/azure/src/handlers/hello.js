'use strict';
const url = process.env.MONGODB;
const {get, create} = require('multicloud-blog-api');

module.exports.status = async function(context, req) {
  return context.res = {
    body: 'All good'
  }
};

module.exports.get = async function(context, req) {
  const result = await get(url);
  const item = {
    result : result,
    dataFrom : "AZURE"
  }
  return context.res  = {body: JSON.stringify(item)};
};

module.exports.create = async function(context, req) {
  const bodyInformation = req.body;
  const header = bodyInformation.header;
  const text = bodyInformation.text;
  try{
    const result = await create(header,text,url);
    return context.res  = {body: JSON.stringify(result)};
  }catch(err){
    return context.res = {status : 500, body: JSON.stringify(err)};
  }
};
