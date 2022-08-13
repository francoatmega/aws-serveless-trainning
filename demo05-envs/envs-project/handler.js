'use strict';
const envs = require('./serverless/envs-validation')
const axios = require('axios')
const cheerio = require('cheerio')
const { randomUUID } = require('crypto')
const aws = require('aws-sdk')
const dynamoDB = new aws.DynamoDB.DocumentClient()
class Handler {
  static async main(args) {

    console.log('at ', new Date().toISOString(), ' with args ', JSON.stringify(args, null, 2))

    const { data } = await axios(envs.BASE_URL)

    const $ = cheerio.load(data)
    const [ commitMessage ] = $('#content').text().trim().split('\n')

    const item = await dynamoDB.put({
      TableName: envs.TABLE_NAME,
      Item: {
        commitMessage: commitMessage,
        id: randomUUID(),
        createdAt: new Date().toISOString()
      }
    }).promise()

    console.log(item)

    return {
      statusCode: 200
    }
  }
}

module.exports = {
  scheduler: Handler.main
}