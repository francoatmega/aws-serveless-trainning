'use strict';
require('../serverless/envs-validation')
const s3 = require('../src/AWSFactory')('S3')
const { Writable, pipeline } = require('stream')
class Handler {
  static async main(args) {
    try {
        const bucketName = args.Records[0].s3.bucket.name
        const objectKey = args.Records[0].s3.object.key
        console.log(`Processing object ${objectKey} in ${bucketName}...`)
        s3.getObject({
          Bucket: bucketName,
          Key: objectKey
        })
        .createReadStream()
        .on('data', data => {
          console.log('Data ', data.toString())
        })
        .on('error', error => {
          console.log('Error ', error)
        })
        .on('close', close => {
          console.log('Close ', close)
        })
        .on('finish', _ => {
          console.log('Finished! ')
        })
        return {
          statusCode: 200,
          body: 'Hello'
        }
    } catch (error) {
      console.log(error)
        return {
          statusCode: 500,
          body: 'Internal server error'
        }
    }
  }
}

module.exports = Handler.main