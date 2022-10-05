const HeroService = require('../services/heroe')
const HeroRepository = require('../repositories/heroe')

exports.createInstance = () => {
    const heroRepository = new HeroRepository()
    const heroService = new HeroService({
        repository: heroRepository
    })
    return heroService
}