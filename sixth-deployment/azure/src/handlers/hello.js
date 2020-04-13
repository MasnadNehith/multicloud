'use strict';
const jwt = require('jsonwebtoken');
const secret = 'youcanputwhateverhereandifothersknowtheywilldecodeiteasily'

module.exports.getHeaders = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const bearer = req.headers.authorization.split(' ');
  const token = bearer[1];
  const items = ['cookies', 'cake', 'pie']
  try{
    jwt.verify(token, secret);
    return context.res = {
      body: JSON.stringify(items)
    };
  }catch(err){
    return context.res = {
      status : 401,
      body: JSON.stringify(err)
    };
  }
}
