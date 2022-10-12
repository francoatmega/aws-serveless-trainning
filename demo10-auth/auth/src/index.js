
exports.public = async () => {
    return {
        statusCode: 200,
        body: 'public'
    }
}

exports.private = async () => {
    return {
        statusCode: 200,
        body: 'private'
    }
}