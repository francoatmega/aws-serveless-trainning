const dynamoose = require('dynamoose');

module.exports = () => {
    if (process.env.ENVIROMENT === 'local') {
        const host = process.env.LOCALSTACK_URL
        const port = process.env.DYNAMODB_PORT
        dynamoose.aws.ddb.local(`http://${host}:${port}`)
    }
}