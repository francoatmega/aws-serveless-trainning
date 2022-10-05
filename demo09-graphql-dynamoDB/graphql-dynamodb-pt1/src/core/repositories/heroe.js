const BaseRepository = require("./base");
const schema = require('./schemas/heroes');

class HeroeRepository extends BaseRepository {
    constructor() {
        super({ schema })
    }
}

module.exports = HeroeRepository