'use strict';
require('../serverless/envs-validation')
class Handler {
  static async main(args) {
    try {
        const bucket = args.Records[0].s3.bucket.name
        const object = args.Records[0].s3.object.key
        console.log(`Processing object ${object} in ${bucket}...`)
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