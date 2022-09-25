'use strict';
require('../serverless/envs-validation')
const s3 = require('../src/AWSFactory')('S3')
const sqs = require('../src/AWSFactory')('SQS')
const { Writable } = require('stream')
const csvtojson = require('csvtojson')
class Handler {
  static async main(args) {
    try {
        const bucketName = args.Records[0].s3.bucket.name
        const objectKey = args.Records[0].s3.object.key
        const queueURL = await this.getQueueUrl()
        console.log(`Processing object ${objectKey} in ${bucketName}...`)
        console.log('Get queueURL ', queueURL)
        s3.getObject({
          Bucket: bucketName,
          Key: objectKey
        })
        .createReadStream()
        .pipe(csvtojson())
        .pipe(this.processDataOnDemand(queueURL))
        return {
          statusCode: 200,
          body: 'Hello'
        }
    } catch (error) {
        console.log(error)
        return {
          statusCode: 500,
          body: error.message
        }
    }
  }

  processDataOnDemand(queueURL) {
    const writableStream = new Writable({
      write: async (chunk, encode, cb) => {
        const item = chunk.toString()
        console.log('Sending ', item, ' to queue ', queueURL)
        cb()
        await sqs.sendMessage({
          QueueUrl: queueURL,
          MessageBody: item
        }).promise()
      }
    })
    return writableStream
  }

  async getQueueUrl() {
    const queueData = await sqs.getQueueUrl({
      QueueName: process.env.QUEUE_NAME
    }).promise() 
    return queueData.QueueUrl
  } 
}

const handler = new Handler()

module.exports = Handler.main.bind(handler)