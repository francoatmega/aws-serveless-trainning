const { randomUUID } = require('crypto')
const Joi = require('@hapi/joi')
const decoratorValidation = require('./util')

class Handler {

    constructor({ db }) {
        this.db = db
        this.dbTableName = 'users'
    }

    static validator() {
        return Joi.object({
            id: Joi.number().required(),
            name: Joi.string().max(100).min(3).required(),
            age: Joi.number().max(100).min(1).required()
        })
    }

    insertData(data) {
        return this.db.put(data).promise()
    }

    parseData(data) {
        const params = {
            TableName: this.dbTableName,
            Item: {
                ...data,
                id: randomUUID(),
                createdAt: new Date().toISOString()
            }
        }
        return params
    }

    async main(event) {
        try {
            const params = this.parseData(event.body)
            await this.insertData(params)
            return {
                statusCode: 200,
                body: 'Inserted'
            }
        } catch (err) {
            console.log(' Error ', err)
            return {
                statusCode: 500,
                body: 'Internal server error'
            }
        }
    }
}

const aws = require('aws-sdk')
const db = new aws.DynamoDB.DocumentClient()

const handler = new Handler({
    db: db
})
module.exports = decoratorValidation(
        handler.main.bind(handler),
        Handler.validator(),
        'body'
    )