'use strict';

const create =  async (request, response) => {
  response.status(200).send('Created');
};

const destroy =  async (request, response) => {
  response.status(200).send('Destroy');
};

module.exports = {
  create,
  destroy
}