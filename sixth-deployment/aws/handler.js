'use strict';
const jwt = require('jsonwebtoken');
const secret = 'youcanputwhateverhereandifothersknowtheywilldecodeiteasily'
module.exports.authorize = async event => {
 //username
 // password
 // username -> password.
 // decrypt password
 // match password you got with the password coming db
 // and if its successful generate an auth token and return .
 const user = {
   id : '1',
   username : 'masnad'
 }
 var token = jwt.sign(user, secret,{expiresIn: '1h'});
  return { statusCode: 200, body: JSON.stringify(token)};
};


module.exports.decode = async event => {

  const bearer = event.headers.Authorization.split(' ');
  const token = bearer[1];
  try{
    var decoded = jwt.verify(token, secret);
    return { statusCode: 200, body: JSON.stringify(decoded)};
  }catch(err){
    return { statusCode: 401, body: JSON.stringify(err)};
  }
 };