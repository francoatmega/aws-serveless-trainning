'use strict';
const envs = require('./serverless/envs-validation')

class Handler {
  static async main(args) {
    try {
        return {
            statusCode: 200,
            body: 'Hello'
          }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Internal server error'
          }
    }
  }
}

module.exports = Handler.main