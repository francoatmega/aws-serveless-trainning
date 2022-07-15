async function handler(event, context) {
     console.log('Event ', JSON.stringify(event, null, 2))
     console.log('Context ', JSON.stringify(context, null, 2))

     return {
        data: {
            hello: 'Hi 123'
        }
     }
}

module.exports = {
    handler
}