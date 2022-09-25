const AWS = require('aws-sdk')

module.exports = () => {
    if (process.env.ENVIROMENT === 'local') {
        const sqsConfig = {
            endpoint: new AWS.Endpoint(`${process.env.LOCALSTACK_URL}/000000000000/${process.env.QUEUE_NAME}`)
          }
        return new AWS.SQS(sqsConfig)
    }
    return new AWS.SQS();
}