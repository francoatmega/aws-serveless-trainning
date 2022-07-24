const decoratorValidation = (fn, schema, argsType) => {
    return async function (event) {
        const { error, value } = await schema.validate(event.body)
        if (!error) return fn.apply(this, arguments)

        event[argsType] = value
        
        return {
            statusCode: 422,
            body: error.message
        }
    }
}

module.exports = decoratorValidation