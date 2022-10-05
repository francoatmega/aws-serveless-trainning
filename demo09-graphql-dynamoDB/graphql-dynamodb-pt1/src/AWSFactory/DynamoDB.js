const AWS = require('aws-sdk')

module.exports = () => {
    if (process.env.ENVIROMENT === 'local') {
        const dynamoDBConfig = {
            region: 'us-east-1',
            accessKeyId: 'DEFAULT_ACCESS_KEY',
            secretAccessKey: 'DEFAULT_SECRET_ACCESS_KEY',
            endpoint: new AWS.Endpoint(`http://${process.env.LOCALSTACK_URL}/${process.env.DYNAMODB_PORT}`),
          }
        return new AWS.DynamoDB(dynamoDBConfig)
    }
    return new AWS.DynamoDB()
}