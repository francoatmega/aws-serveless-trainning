const dynamoose = require('dynamoose')
const schema = new dynamoose.Schema({
    id: {
        type: String,
        required: true,
        hashKey: true
    },
    name: {
        type: String,
        required: true,
    },
    skillId:{
        type: String,
        required: true,
    }
})

module.exports = dynamoose.model(
    process.env.HEROES_TABLE,
    schema
)

