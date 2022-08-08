'use strict';

module.exports.scheduler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Enviroment: ${process.env.NODE_ENV}`,
        input: event,
      },
      null,
      2
    ),
  };
};
