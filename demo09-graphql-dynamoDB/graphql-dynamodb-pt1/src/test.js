const heroFactory = require('../src/core/factories/heroe')
const setup = require('../src/core/util/setupDB')

setup()

module.exports = async () => {
    const hero = heroFactory.createInstance()
    await hero.create({
        id: '2',
        name: 'Jardel Matias',
        skills: [
            '1'
        ]
    })
}