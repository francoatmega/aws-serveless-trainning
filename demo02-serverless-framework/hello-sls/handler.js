'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
