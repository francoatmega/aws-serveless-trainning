'use strict';
const dynamoDB = require('./AWSFactory')('DynamoDB')

class Handler {
  static async main(args) {
    try {
        const heroes = await dynamoDB.scan({
          TableName: process.env.HEROES_TABLE
        }).promise()

        const skills = await dynamoDB.scan({
          TableName: process.env.HEROES_TABLE
        }).promise()
        return {
          heroes,
          skills
        }
    } catch (error) {
        return {
          statusCode: 500,
          body: error.message
        }
    }
  }
}

const handler = new Handler()

module.exports = Handler.main.bind(handler)