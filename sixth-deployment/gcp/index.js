'use strict';
const jwt = require('jsonwebtoken');
const secret = 'youcanputwhateverhereandifothersknowtheywilldecodeiteasily';

exports.http = (request, response) => {
  const bearer = request.headers['authorization'].split(' ');
  console.log(request);

  const token = bearer[1];
  const Recipe = {
    cake : ' a lot of sugar',
    cookie : ' a llot of flour',
    pie : 'a lot of apples'
  }
  try{
    jwt.verify(token, secret);
    response.status(200).send(Recipe);
  }catch(err){
    response.status(200).send(err);
  }
};

exports.event = (event, callback) => {
  callback();
};
