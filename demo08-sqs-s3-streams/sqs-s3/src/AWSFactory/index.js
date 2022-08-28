
module.exports = (service, config = null) => {
    switch (service) {
        case 'S3': return require('./S3.js')(config)
        default: throw new Error('Service not implemented')
    }
}