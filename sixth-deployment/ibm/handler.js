'use strict';
const jwt = require('jsonwebtoken');
const secret = 'youcanputwhateverhereandifothersknowtheywilldecodeiteasily';

function getPrice(params) {
  const bearer = params.__ow_headers.authorization.split(' ');
  const token = bearer[1];
  const Price = {
    cake : '10.00',
    cookie : '1.00',
    pie : '7.00'
  }
  try{
    jwt.verify(token, secret);
    return {payload: Price, status : 200};
  }catch(err){
    return {payload: err, status : 401 };
  }
}

exports.getPrice = getPrice;
