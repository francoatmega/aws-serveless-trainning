'use strict';
const { faker } = require('@faker-js/faker');
const {
  Heroe,
  sequelize
} = require('./database');

class Handler {
  static async main(args) {
    try {
        await sequelize.authenticate();
        Heroe.sync()
        // Heroe.create({
        //   nome: faker.internet.userName(),
        //   poder: faker.helpers.arrayElement(['visao além do alcance', 'super sopro', 'raio choque'])
        // })
        const heroes = await Heroe.findAll();
        return {
          statusCode: 200,
          body: JSON.stringify(heroes)
        }
    } catch (error) {
        console.log(error)
        return {
          statusCode: 500,
          body: error.message
        }
    }
  }
}

const handler = new Handler()

module.exports = Handler.main.bind(handler)