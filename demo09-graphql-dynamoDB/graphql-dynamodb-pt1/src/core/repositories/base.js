const { promisify } = require('util')

class BaseRepository {
    constructor({ schema }) {
        this.schema = schema
    }

    async create(item) {
        return this.schema.create(item)
    }

    async findOne(id) {
        return this.schema.query({ id: { eq:  id }}).exec()
    }

    async findAll(query) {
        return this.schema.scan(query).exec()
    }
}

module.exports = BaseRepository