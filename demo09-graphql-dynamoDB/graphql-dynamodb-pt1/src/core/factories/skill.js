const SkillService = require('../services/skill')
const SkillRepository = require('../repositories/skill')

exports.createInstance = () => {
    const skillRepository = new SkillRepository()
    const skillService = new SkillService({
        repository: skillRepository
    })
    return skillService
}