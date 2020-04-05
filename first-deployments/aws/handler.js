'use strict';

const create = async () => {
  return {
    statusCode:200,
    body: JSON.stringify('Create')
  }
}

const Delete = async () => {
  return {
    statusCode:200,
    body: JSON.stringify('Delete')
  }
}
module.exports = {
  create,
  Delete
}
