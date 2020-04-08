'use strict';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

const response = {statusCode: 200, body : JSON.stringify('Starting here...')};

module.exports.send = async event => {
  const bodyInformation = JSON.parse(event.body);
  const name = bodyInformation.name;
  const phone = bodyInformation.phone;
  try{
    const result = await client.messages.create({body: name, from: TWILIO_PHONE, to: phone});
    response.statusCode = 200;
    response.body = JSON.stringify(result);
  }catch(err){
    response.statusCode = 500;
    response.body = JSON.stringify(err);
  }
   return response;
};



