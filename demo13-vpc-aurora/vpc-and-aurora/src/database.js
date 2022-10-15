const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USERNAME, 
    process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
    }
);

const Heroe = sequelize.define('heroes', {
    id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
        required: true,
    },
    poder: {
        type: Sequelize.STRING,
        required: true,
    },
}, {
     tableName: 'heroes',
     freezeTableName: true,
     timestamps: true
});

module.exports = {
    Heroe,
    sequelize
}

