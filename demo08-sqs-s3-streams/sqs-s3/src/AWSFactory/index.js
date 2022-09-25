
module.exports = (service, config = null) => {
    switch (service) {
        case 'S3': return require('./S3.js')(config)
        case 'SQS': return require('./SQS.js')(config)
        default: throw new Error('Service not implemented')
    }
}