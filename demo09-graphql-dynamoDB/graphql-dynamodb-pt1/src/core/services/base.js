const { randomUUID } = require('crypto');
class BaseService {
    constructor({ repository }) {
        this.repository = repository
    }

    async create(item) {
        const id = randomUUID()
        return this.repository.create({
            ...item,
            id: id
        })
    }

    async findOne(id) {
        return this.repository.findOne(id)
    }

    async findAll(query) {
        return this.repository.findAll(query)
    }
}

module.exports = BaseService