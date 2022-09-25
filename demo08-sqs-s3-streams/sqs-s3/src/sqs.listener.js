'use strict';
require('../serverless/envs-validation')

class Handler {
  static async main(args) {
    try {
      const [{ messageId, body }] = args.Records
      const parsedMessage = JSON.parse(body)
      console.log('Processing message ', messageId, ' with body ', parsedMessage)
      return {
          statusCode: 200,
          body: 'Ok'
        }
    } catch (error) {
      console.log(error)
        return {
            statusCode: 500,
            body: error.message
          }
    }
  }
}

module.exports = Handler.main