const BaseService = require('./base')

class HeroeService extends BaseService {
    constructor({ repository }) {
        super({ repository })
    }
}

module.exports = HeroeService