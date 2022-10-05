const BaseRepository = require("./base");
const schema = require('./schemas/skills');

class SkillRepository extends BaseRepository {
    constructor() {
        super({ schema })
    }
}

module.exports = SkillRepository