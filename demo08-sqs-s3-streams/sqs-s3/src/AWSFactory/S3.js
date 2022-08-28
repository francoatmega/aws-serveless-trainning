const AWS = require('aws-sdk')

module.exports = () => {
    if (process.env.ENVIROMENT === 'local') {
        const s3Config = {
            endpoint: new AWS.Endpoint(process.env.LOCALSTACK_URL)
          }
        return new AWS.S3(s3Config)
    }
    return new AWS.S3();
}