
exports.public = async () => {
    return {
        statusCode: 200,
        body: 'public'
    }
}

exports.private = async (event) => {
    console.log({
        'User': JSON.parse(event.requestContext.authorizer.user)
    })
    return {
        statusCode: 200,
        body: 'private'
    }
}