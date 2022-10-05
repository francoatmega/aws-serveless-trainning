const dynamoose = require('dynamoose')
const schema = dynamoose.Schema({
    id: {
        type: String,
        required: true,
        hashKey: true
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
})

module.exports = dynamoose.model(
    process.env.SKILLS_TABLE,
    schema
)

