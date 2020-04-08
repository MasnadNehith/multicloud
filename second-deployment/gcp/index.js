'use strict';
const accountSid = 'ACda9b0dcc16b62477b6dda8cb8815b03d';
const authToken = '3d5a46325d9914a6b67f5e8066280b48';
const TWILIO_PHONE = '+13348458430';
const client = require('twilio')(accountSid, authToken);

exports.http = async (request, response) => {
  const bodyInformation = JSON.parse(request.body);
  const name = bodyInformation.name;
  const phone = bodyInformation.phone;
  try{
    const result = await client.messages.create({body: name, from: TWILIO_PHONE, to: phone});
    return response.status(200).send(JSON.stringify(result));
  }catch(err){
    return response.status(200).send(JSON.stringify(err));
  }
};



